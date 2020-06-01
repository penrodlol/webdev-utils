import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, tap, switchMap, mergeMap } from 'rxjs/operators';
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
                    this.router.navigate(['home']);
                    this.snackbarService.triggerSnackBar(`Welcome ${auth.user.displayName || auth.user.email}!`);
                    return AuthApiActions.loginSuccess(
                        auth.user.uid,
                        auth.user?.displayName,
                        auth.user.email,
                        auth.user?.photoURL
                    );
                }),
                catchError(error => {
                    this.snackbarService.triggerSnackBar(error.message);
                    return of(AuthApiActions.loginFailure(error));
                })
            ))
    ));

    signup$ = createEffect(() => this.actions$.pipe(
        ofType(AuthUserActions.signup),
        mergeMap(actions => this.authService.signup(actions.email, actions.password)
            .pipe(
                map(auth => {
                    auth.user.sendEmailVerification();
                    this.snackbarService.triggerSnackBar(`Check ${auth.user.email} for email verification`);
                    this.router.navigate(['auth/login']);
                    return AuthApiActions.signupSuccess();
                }),
                catchError(error => {
                    this.snackbarService.triggerSnackBar(error.message);
                    return of(AuthApiActions.signupFailure(error));
                })
            )
        )
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