import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { WebDevUtilsRoutes } from '@routes/routes';

import { MediaObserverService } from '@shared/media-observer/media-observer.service';
import { Breakpoints } from '@shared/enums/breakpoints.enum';
import { AuthSelectors } from '@shared/state/auth/selectors';
import { WebDevUtilsState } from '@shared/state';

import { AuthUserActions } from '@auth/actions';

import { Store } from '@ngrx/store';

import { filter, take, tap } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  uid$: Observable<string> = this.store.select(AuthSelectors.selectUid);

  routes = WebDevUtilsRoutes;
  showSidenav: boolean;
  showUserHeader = false;

  constructor(
    private store: Store<WebDevUtilsState>,
    private afAuth: AngularFireAuth,
    private mediaObserverSevice: MediaObserverService
  ) {
      this.mediaObserverSevice
        .query([Breakpoints.MD, Breakpoints.LG, Breakpoints.XL])
        .subscribe(isShown => this.showSidenav = isShown);
  }

  ngOnInit(): void {
    combineLatest([
      this.afAuth.authState,
      this.uid$
    ]).pipe(
      take(1),
      tap(() => this.showUserHeader = true),
      filter(([auth, uid]) => auth != null && !uid),
    ).subscribe(([auth, _]) => {
      this.store.dispatch(AuthUserActions.returningLogin(
          auth.uid,
          auth.email,
          auth.displayName,
          auth.photoURL
        ));
    });
  }

  logout = () => this.store.dispatch(AuthUserActions.logout());
}
