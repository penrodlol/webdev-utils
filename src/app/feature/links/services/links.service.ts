import { Injectable, OnDestroy } from '@angular/core';

import { Links } from '@shared/enums/links.enum';
import { FirestoreService } from '@shared/firestore/firestore.service';

import { ILink } from '@links/models/link.interface';
import { ILinksMeta } from '@links/models/links-meta.interface';
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

  metaData = (): Observable<ILinksMeta | unknown> => this.firestoreService.links().valueChanges()
    .pipe(map((metaResponse: any) => metaResponse?.meta));


  links = (): Observable<{newTab: boolean, nodes: ILinkListNode[]} | unknown> => combineLatest(
    this.metaData(),
    this.clientSide().valueChanges(),
    this.serverSide().valueChanges(),
    this.misc().valueChanges(),
  ).pipe(
    map(([meta, client, server, misc]: [ILinksMeta, ILink[], ILink[], ILink[]]) => {
      return {
        newTab: meta ? meta.newTab : false,
        nodes: [
          { parent: 'Client-Side', children: client, hidden: meta ? meta.hidden.clientSide : false },
          { parent: 'Server-Side', children: server, hidden: meta ? meta.hidden.serverSide : false },
          { parent: 'Misc', children: misc, hidden: meta ? meta.hidden.misc : false }
        ]
      }
    })
  );


  selectLink = (link: ILink) => {
    this.linkInContextObserver.next(link);
    sessionStorage.setItem('lastSelectedLink', JSON.stringify(link));
  }

  private clientSide = () => this.firestoreService.links().collection(Links.CLIENT_SIDE);
  private serverSide = () => this.firestoreService.links().collection(Links.SERVER_SIDE);
  private misc = () => this.firestoreService.links().collection(Links.MISC);
}
