import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import * as firebase from 'firebase/app';

import { Collections } from '@shared/enums/collections.enum';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private readonly uid: string = firebase.auth().currentUser.uid;

  constructor(
    private afStore: AngularFirestore
  ) { }

  links = () => this.afStore.collection(Collections.LINKS).doc(this.uid);
}
