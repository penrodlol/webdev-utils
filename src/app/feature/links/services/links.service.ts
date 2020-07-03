import { Injectable } from '@angular/core';

import { Links } from '@shared/enums/links.enum';
import { FirestoreService } from '@shared/firestore/firestore.service';

import { ILink } from '@links/models/link.interface';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(
    private firestoreService: FirestoreService
  ) { }

  visible = (): Observable<any | unknown> => this.firestoreService.links().valueChanges().pipe(this.metaDataProp('visible'));

  clientSide = (): Observable<ILink[] | unknown> => this.firestoreService.links().collection(Links.CLIENT_SIDE).valueChanges();
  
  serverSide = (): Observable<ILink[] | unknown> => this.firestoreService.links().collection(Links.SERVER_SIDE).valueChanges();

  misc = (): Observable<ILink[] | unknown> => this.firestoreService.links().collection(Links.MISC).valueChanges();

  private metaDataProp = (prop: string) => (source: Observable<any | unknown>) => source.pipe(map(data => data.metaData[prop]))

}
