import { Injectable } from '@angular/core';

import { Links, LinksMeta } from '@shared/enums/links.enum';
import { FirestoreService } from '@shared/firestore/firestore.service';

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

  visible = (): Observable<IVisibleLinks | unknown> => this.firestoreService.links().valueChanges().pipe(
    this.metaDataProp(LinksMeta.VISIBLE),
    map(visible => visible ? visible : { clientSide: true, serverSide: true, misc: true, })
  );

  clientSide = (): Observable<ILink[] | unknown> => this.firestoreService.links().collection(Links.CLIENT_SIDE).valueChanges();
  
  serverSide = (): Observable<ILink[] | unknown> => this.firestoreService.links().collection(Links.SERVER_SIDE).valueChanges();

  misc = (): Observable<ILink[] | unknown> => this.firestoreService.links().collection(Links.MISC).valueChanges();

  updateVisibleLinks = (visibleLinks: IVisibleLinks) => this.firestoreService.links().set({visible: visibleLinks});

  addLink = (link: ILink,  collection: Links.CLIENT_SIDE | Links.SERVER_SIDE | Links.MISC) => this.firestoreService.links().collection(collection).add(link);

  private metaDataProp = (prop: string) => (source: Observable<any>) => source.pipe(map(data => data ? data[prop] : null))

}
