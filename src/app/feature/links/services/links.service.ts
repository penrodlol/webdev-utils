import { Injectable } from '@angular/core';
import { DocumentChangeAction, DocumentData } from '@angular/fire/firestore';

import { Links, LinksMeta } from '@shared/enums/links.enum';
import { FirestoreService } from '@shared/firestore/firestore.service';
import { LinksCollection } from '@shared/types';

import { ILink } from '@links/models/link.interface';
import { IVisibleLinks } from '@links/models/visible-links.interface';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(
    private firestoreService: FirestoreService
  ) { }

  visible = (): Observable<IVisibleLinks | unknown> => this.firestoreService.links()
    .valueChanges()
    .pipe(
      this.metaDataProp(LinksMeta.VISIBLE),
      map(visible => visible ? visible : { clientSide: true, serverSide: true, misc: true, })
    );

  deleteWarning = (): Observable<boolean | unknown> => this.firestoreService.links()
    .valueChanges()
    .pipe(this.metaDataProp(LinksMeta.DELETE_WARNING));

  clientSide = (): Observable<ILink[] | unknown> => this.firestoreService.links()
    .collection(Links.CLIENT_SIDE)
    .snapshotChanges()
    .pipe(this.handlePayload());
  
  serverSide = (): Observable<ILink[] | unknown> => this.firestoreService.links()
    .collection(Links.SERVER_SIDE)
    .snapshotChanges()
    .pipe(this.handlePayload());

  misc = (): Observable<ILink[] | unknown> => this.firestoreService.links()
    .collection(Links.MISC)
    .snapshotChanges()
    .pipe(this.handlePayload());

  updateVisibleLinks = (visibleLinks: IVisibleLinks) => this.firestoreService.links().update({visible: visibleLinks});

  updateDeleteWarning = (deleteWarning: boolean) => this.firestoreService.links().update({deleteWarning});

  add = (link: ILink,  collection: LinksCollection) => this.firestoreService.links()
    .collection(collection)
    .add({
      ...link,
      lastUpdated: new Date().getTime()
    });
  
  update = (link: ILink, collection: LinksCollection) =>
    this.firestoreService.links().collection(collection).doc(link.id).set({
      name: link.name,
      url: link.url,
      lastUpdated: new Date().getTime()
    });

  delete = (link: ILink, collection: LinksCollection) => this.firestoreService.links()
    .collection(collection)
    .doc(link.id)
    .delete();

  private metaDataProp = (prop: string) => (source: Observable<any>) => source.pipe(map(data => data ? data[prop] : null));

  private handlePayload = () => (source: Observable<DocumentChangeAction<DocumentData>[]>): Observable<ILink[]> =>
    source.pipe(map(collection => collection.map(doc => {
      return {
        id: doc.payload.doc.id,
        name: doc.payload.doc.data().name,
        url: doc.payload.doc.data().url,
        lastUpdated: doc.payload.doc.data().lastUpated
      }
    })))
}
