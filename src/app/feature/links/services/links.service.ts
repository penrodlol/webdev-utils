import { Injectable, OnDestroy } from '@angular/core';

import { Links } from '@shared/enums/links.enum';
import { FirestoreService } from '@shared/firestore/firestore.service';

import { ILink } from '@links/models/link.interface';
import { ILinksMeta } from '@links/models/links-meta.interface';

import { Observable, BehaviorSubject } from 'rxjs';
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

  metaData = (): Observable<ILinksMeta | unknown> => this.firestoreService.links()
    .valueChanges()
    .pipe(map((metaResponse: any) => metaResponse?.meta));

  clientSide = (): Observable<ILink[] | unknown> => this.firestoreService.links().collection(Links.CLIENT_SIDE).valueChanges();
  serverSide = (): Observable<ILink[] | unknown> => this.firestoreService.links().collection(Links.SERVER_SIDE).valueChanges();
  misc = (): Observable<ILink[] | unknown> => this.firestoreService.links().collection(Links.MISC).valueChanges();


  selectLink = (link: ILink) => {
    this.linkInContextObserver.next(link);
    sessionStorage.setItem('lastSelectedLink', JSON.stringify(link));
  }

}
