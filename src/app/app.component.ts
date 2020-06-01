import { Component, OnInit, ViewChild } from '@angular/core';
import { WebDevUtilsRoutes } from './routes';
import { Store } from '@ngrx/store';
import { IAuthUserState } from '@feature/auth/state/auth-user.state';
import { AuthUserActions } from '@feature/auth/actions';
import { AngularFireAuth } from '@angular/fire/auth';
import { takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sideNav: MatSidenav;

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

  logout = () => {
    this.sideNav.close();
    this.store.dispatch(AuthUserActions.logout()); 
  }
}
