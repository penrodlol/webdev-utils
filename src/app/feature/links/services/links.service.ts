import { Injectable } from '@angular/core';

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

  visibleLinks = (): Observable<IVisibleLinks | unknown> => this.firestoreService.links()
    .valueChanges()
    .pipe(
      this.firestoreService.metaDataProp(LinksMeta.VISIBLE),
      map(visible => visible ? visible : { clientSide: true, serverSide: true, misc: true, })
    );

  deleteWarning = (): Observable<boolean | unknown> => this.firestoreService.links()
    .valueChanges()
    .pipe(this.firestoreService.metaDataProp(LinksMeta.DELETE_WARNING));

  clientSide = (): Observable<ILink[]> => this.firestoreService.links()
    .collection(Links.CLIENT_SIDE, ref => ref.orderBy('lastUpdated', 'desc'))
    .snapshotChanges()
    .pipe(this.firestoreService.enrichDocument());
  
  serverSide = (): Observable<ILink[]> => this.firestoreService.links()
    .collection(Links.SERVER_SIDE, ref => ref.orderBy('lastUpdated', 'desc'))
    .snapshotChanges()
    .pipe(this.firestoreService.enrichDocument());

  misc = (): Observable<ILink[]> => this.firestoreService.links()
    .collection(Links.MISC, ref => ref.orderBy('lastUpdated', 'desc'))
    .snapshotChanges()
    .pipe(this.firestoreService.enrichDocument());

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

}
