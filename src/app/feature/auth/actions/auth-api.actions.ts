import { createAction } from '@ngrx/store';

export const loginSuccess = createAction(
    '[Auth/Api] Success',
    (uid: string, displayName: string, email: string, photoURL: string) =>
        ({ uid, displayName, email, photoURL })
);

export const loginFailure = createAction(
    '[Auth/Api] Failure',
    (error: string) => ({ error })
);
