import { Injectable } from '@angular/core';

import { Links } from '@shared/enums/links.enum';
import { FirestoreService } from '@shared/firestore/firestore.service';

import { ILink } from '@links/models/link.interface';
import { ILinkListNode } from '@links/models/link-list-node.interface';

import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  private linkInContextObserver: BehaviorSubject<ILink> = new BehaviorSubject<ILink>(
    JSON.parse(sessionStorage.getItem('lastSelectedLink'))
  );

  readonly linkInContext: Observable<ILink> = this.linkInContextObserver.asObservable();

  constructor(
    private firestoreService: FirestoreService
  ) { }

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
