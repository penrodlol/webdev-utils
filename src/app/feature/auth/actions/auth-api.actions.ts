import { createAction } from '@ngrx/store';

export const loginSuccess = createAction(
    '[Auth/Api] Login Success',
    (uid: string, displayName: string, email: string, photoURL: string) =>
        ({ uid, displayName, email, photoURL })
);

export const loginFailure = createAction(
    '[Auth/Api] Login Failure',
    (error: string) => ({ error })
);

export const signupSuccess = createAction('[Auth/Api] Signup Success');

export const signupFailure = createAction(
    '[Auth/Api] Signup Failure',
    (error: string) => ({ error })
);