import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { WebDevUtilsRoutes } from '@routes/routes';

import { IAuthUserState } from '@shared/state/auth/auth-user.state';

import { AuthUserActions } from '@auth/actions';

import { Store } from '@ngrx/store';

import { takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  routes = WebDevUtilsRoutes;
  authUser$: Observable<firebase.User> = this.afAuth.user;

  constructor(
    private store: Store<IAuthUserState>,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.authUser$
      .pipe(takeWhile(user => user != null))
      .subscribe(user => {
        this.store.dispatch(AuthUserActions.returningLogin(
          user.uid,
          user.displayName,
          user.email,
          user.photoURL
        ));
      });
  }

  logout = () => this.store.dispatch(AuthUserActions.logout());
}
