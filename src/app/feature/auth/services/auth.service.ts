import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  googleLogin(): Observable<firebase.auth.UserCredential> {
    const google = new firebase.auth.GoogleAuthProvider();
    return from(this.afAuth.signInWithPopup(google));
  }

  standardLogin(email: string, password: string): Observable<firebase.auth.UserCredential> {
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  logout() { this.afAuth.signOut(); }
}
