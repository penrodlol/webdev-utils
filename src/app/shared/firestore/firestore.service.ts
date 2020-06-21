import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Collections } from '@shared/enums/collections.enum';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private afStore: AngularFirestore
  ) { }

  links = () => this.afStore.collection(Collections.LINKS).doc(sessionStorage.getItem('uid'));
}
