import { Injectable, OnDestroy } from '@angular/core';

import { Links } from '@shared/enums/links.enum';
import { FirestoreService } from '@shared/firestore/firestore.service';

import { ILink } from '@links/models/link.interface';
import { ILinkListNode } from '@links/models/link-list-node.interface';

import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LinksService implements OnDestroy {
  private linkInContextObserver: BehaviorSubject<ILink> = new BehaviorSubject<ILink>(
    JSON.parse(sessionStorage.getItem('lastSelectedLink'))
  );

  readonly linkInContext: Observable<ILink> = this.linkInContextObserver.asObservable();

  constructor(
    private firestoreService: FirestoreService,
    private router: Router
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart && event.url === '/auth'))
      .subscribe(() => this.linkInContextObserver.next(null));
  }

  ngOnDestroy(): void {
    this.linkInContextObserver.unsubscribe();
  }

  links = (): Observable<ILinkListNode[] | unknown> => combineLatest(
    this.clientSide().valueChanges(),
    this.serverSide().valueChanges()
  ).pipe(
    map(([clientSide, serverSide]) => {
      return [
        { parent: 'Client-Side', children: clientSide },
        { parent: 'Server-Side', children: serverSide }
      ]
    })
  )

  selectLink = (link: ILink) => {
    this.linkInContextObserver.next(link);
    sessionStorage.setItem('lastSelectedLink', JSON.stringify(link));
  }

  private clientSide = () => this.firestoreService.links().collection(Links.CLIENT_SIDE);
  private serverSide = () => this.firestoreService.links().collection(Links.SERVER_SIDE);
}
