import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap, tap, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { AuthUserActions, AuthApiActions } from '../actions';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {

    googleLogin$ = createEffect(() => this.actions$.pipe(
        ofType(AuthUserActions.googleLogin),
        exhaustMap(() => this.authService.googleLogin().pipe(
            map(auth =>
                AuthApiActions.loginSuccess(auth.user.uid, auth.user.displayName, auth.user.email, auth.user.photoURL)),
            catchError(error => 
                of(AuthApiActions.loginFailure(error)))
        ))
    ));

    standardLogin$ = createEffect(() => this.actions$.pipe(
        ofType(AuthUserActions.standardLogin),
        switchMap(actions => this.authService.standardLogin(actions.email, actions.password).pipe(
            map(auth =>
                AuthApiActions.loginSuccess(auth.user.uid, auth.user.displayName, auth.user.email, auth.user.photoURL)),
            catchError(error => 
                of(AuthApiActions.loginFailure(error)))
        ))
    ));

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(AuthUserActions.logout),
        tap(() => {
            this.authService.logout();
            this.router.navigate([''])
        })
    ), { dispatch: false });

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) { }
}