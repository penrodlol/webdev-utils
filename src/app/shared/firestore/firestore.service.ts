import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, DocumentData } from '@angular/fire/firestore';

import { Store } from '@ngrx/store';

import { Collections } from '@shared/enums/collections.enum';
import { WebDevUtilsState } from '@shared/state';
import { AuthSelectors } from '@shared/state/auth/selectors';
import { takeOne } from '@shared/operators';

import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private uid: string;

  constructor(
    private store: Store<WebDevUtilsState>,
    private afStore: AngularFirestore
  ) {
    this.store
      .select(AuthSelectors.selectUid)
      .pipe(takeOne())
      .subscribe(uid => this.uid = uid);
  }

  links = () => this.uid ? this.afStore.collection(Collections.LINKS).doc(this.uid) : null;

  enrichDocument = () => (source: Observable<DocumentChangeAction<DocumentData>[]>): Observable<any[]> =>
    source.pipe(
      filter(documents => documents != null),
      map(documents => documents.map(document => {
        return  {
          id: document.payload.doc.id,
          ...document.payload.doc.data()
        };
      }))
    )

  metaDataProp = (prop: string) => (source: Observable<any>) => source.pipe(map(data => data ? data[prop] : null));

}
