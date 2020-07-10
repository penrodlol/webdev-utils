import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, DocumentData } from '@angular/fire/firestore';

import { Collections } from '@shared/enums/collections.enum';

import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private afStore: AngularFirestore
  ) { }

  links = () => this.afStore.collection(Collections.LINKS).doc(sessionStorage.getItem('uid'));

  enrichDocument = () => (source: Observable<DocumentChangeAction<DocumentData>[]>): Observable<any[]> =>
    source.pipe(
      filter(documents => documents != null),
      map(documents => documents.map(document => {
        return  {
          id: document.payload.doc.id,
          ...document.payload.doc.data()
        }
      }))
    );

  metaDataProp = (prop: string) => (source: Observable<any>) => source.pipe(map(data => data ? data[prop] : null));

}
