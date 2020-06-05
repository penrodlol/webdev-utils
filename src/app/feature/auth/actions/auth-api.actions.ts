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

export const photoURLUploadSuccess = createAction(
    '[Auth/Api] Photo Url Upload Success',
    (storageRef: string) => ({ storageRef })
);

export const photoURLUploadFailure = createAction(
    '[Auth/Api] Photo Url Upload Failure',
    (error: string) => ({ error })
);

export const downloadURLRetrievalSuccess = createAction(
    '[Auth/Api] Download Url Retrieval Success',
    (downloadURL: string) => ({ downloadURL })
);

export const downloadURLRetrievalFailure = createAction(
    '[Auth/Api] Download Url Retrieval Failure',
    (error: string) => ({ error })
);