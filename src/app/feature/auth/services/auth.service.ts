import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Observable, from, throwError, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

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
    return from(this.afAuth.signInWithEmailAndPassword(email, password))
      .pipe(mergeMap(auth =>
        auth.user.emailVerified ?
          of(auth) :
          throwError({ message: `Please verify email: ${auth.user.email}` })
      ));
  }

  signup(email: string, password: string) {
    return from(this.afAuth.createUserWithEmailAndPassword(email, password));
  }

  logout() { this.afAuth.signOut(); }
}
