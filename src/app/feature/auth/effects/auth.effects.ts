import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap, tap, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { AuthUserActions, AuthApiActions } from '../actions';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/shared/snackbar/services/snackbar.service';


@Injectable()
export class AuthEffects {

    login$ = createEffect(() => this.actions$.pipe(
        ofType(AuthUserActions.login),
        switchMap(actions =>
            (actions.email && actions.password ?
                this.authService.standardLogin(actions.email, actions.password) :
                this.authService.googleLogin()
            ).pipe(
                map(auth => {
                    this.router.navigate(['home'])
                    this.snackbarService.triggerSnackBar(
                        `Welcome ${auth.user.displayName || auth.user.email}!`
                    );
                    return AuthApiActions.loginSuccess(
                        auth.user.uid,
                        auth.user.email,
                        auth.user?.displayName,
                        auth.user?.photoURL
                    )
                }),
                catchError(error => {
                    this.snackbarService.triggerSnackBar(error.message);
                    return of(AuthApiActions.loginFailure(error));
                })
            ))
    ));

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(AuthUserActions.logout),
        tap(() => {
            this.authService.logout();
            this.router.navigate(['auth']);
        })
    ), { dispatch: false });

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private snackbarService: SnackbarService,
        private router: Router
    ) { }
}