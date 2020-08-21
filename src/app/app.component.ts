import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
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
  @ViewChild('sidenav') sidenav: MatSidenav;

  uid$: Observable<string> = this.store.select(AuthSelectors.selectUid);
  hideSidenav$: Observable<boolean> = this.mediaObserverSevice.query(Breakpoints.LTMD);

  routes = WebDevUtilsRoutes;
  showUserHeader = false;

  constructor(
    private store: Store<WebDevUtilsState>,
    private afAuth: AngularFireAuth,
    private mediaObserverSevice: MediaObserverService
  ) { }

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

  onRouteClick = () => this.sidenav.mode === 'over' ? this.sidenav.toggle() : null;

  logout = () => this.store.dispatch(AuthUserActions.logout());
}
