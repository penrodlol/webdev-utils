import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, tap, switchMap, mergeMap } from 'rxjs/operators';
import { AuthService } from '../../../../feature/auth/services/auth.service';
import { AuthUserActions, AuthApiActions } from '../../../../feature/auth/actions';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';
import { FirestorageService } from 'src/app/shared/firestorage/firestorage.service';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';


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
                    return AuthApiActions.signupSuccess(actions.displayName);
                }),
                catchError(error => {
                    this.snackbarService.triggerSnackBar(error.message);
                    return of(AuthApiActions.signupFailure(error));
                })
            )
        )
    ));

    updateProfileDisplayName = createEffect(() => this.actions$.pipe(
        ofType(AuthApiActions.signupSuccess),
        mergeMap(actions => this.authService.updateDisplayName(actions.displayName))
    ), { dispatch: false });

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(AuthUserActions.logout),
        tap(() => {
            this.authService.logout();
            this.router.navigate(['auth']);
        })
    ), { dispatch: false });

    uploadPhotoURL = createEffect(() => this.actions$.pipe(
        ofType(AuthUserActions.uploadPhotoURL),
        mergeMap(actions => this.fireStorageService.upload(actions.path, actions.file)
            .pipe(
                map((uploadTaskSnapshot: UploadTaskSnapshot) => {
                    return AuthApiActions.photoURLUploadSuccess(uploadTaskSnapshot.ref.fullPath);
                }),
                catchError(error => {
                    this.snackbarService.triggerSnackBar(error.message);
                    return of(AuthApiActions.photoURLUploadFailure(error));
                })
            )
        )
    ));

    retrieveDowloadUrl = createEffect(() => this.actions$.pipe(
        ofType(AuthApiActions.photoURLUploadSuccess),
        mergeMap(actions => this.fireStorageService.retrieveDownloadURL(actions.storageRef)
            .pipe(
                map(downloadUrl => AuthApiActions.downloadURLRetrievalSuccess(downloadUrl)),
                catchError(error => {
                    this.snackbarService.triggerSnackBar(error.message);
                    return of(AuthApiActions.downloadURLRetrievalFailure(error));
                })
            )
        )
    ));

    updateProfilePhotoUrl = createEffect(() => this.actions$.pipe(
        ofType(AuthApiActions.downloadURLRetrievalSuccess),
        mergeMap(actions => this.authService.updatePhotoURL(actions.downloadURL))
    ), { dispatch: false });

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private fireStorageService: FirestorageService,
        private snackbarService: SnackbarService,
        private router: Router
    ) { }
}