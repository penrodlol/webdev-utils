import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { WebDevUtilsRoutes } from '@routes/routes';

import { IAuthUserState } from '@shared/state/auth/auth-user.state';
import { MediaObserverService } from '@shared/media-observer/media-observer.service';
import { Breakpoints } from '@shared/enums/breakpoints.enum';

import { AuthUserActions } from '@auth/actions';

import { Store } from '@ngrx/store';

import { filter, take } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  authUser$: Observable<firebase.User> = this.afAuth.user;

  routes = WebDevUtilsRoutes;
  showSidenav: boolean;
  trimPadding: boolean;

  constructor(
    private store: Store<IAuthUserState>,
    private afAuth: AngularFireAuth,
    private mediaObserverSevice: MediaObserverService
  ) {
    combineLatest([
      this.mediaObserverSevice.query([Breakpoints.MD, Breakpoints.LG, Breakpoints.XL]),
      this.mediaObserverSevice.query([Breakpoints.XS])
    ]).subscribe(([showSidenavTrigger, trimPaddingTrigger]) => {
      this.showSidenav = showSidenavTrigger;
      this.trimPadding = trimPaddingTrigger;
    });
  }

  ngOnInit(): void {
    this.authUser$
      .pipe(
        filter(user => user != null),
        take(1)
      )
      .subscribe(user => {
        this.store.dispatch(AuthUserActions.returningLogin(
          user.email,
          user.displayName,
          user.photoURL
        ));
      });
  }

  logout = () => this.store.dispatch(AuthUserActions.logout());
}
