import { createAction } from '@ngrx/store';

export const login = createAction(
    '[Auth/User] Login',
    (email?: string, password?: string) => ({ email, password })
);

export const returningLogin = createAction(
    '[Auth/User] Returning Login',
    (uid: string, displayName: string, email: string, photoURL: string) =>
        ({ uid, displayName, email, photoURL })
);

export const signup = createAction(
    '[Auth/User] Signup',
    (email: string, password: string) => ({ email, password })
);

export const logout = createAction('[Auth/User] Logout');

export const uploadPhotoURL = createAction(
    '[Auth/User] Upload Photo Url',
    (path: string, file: File) => ({ path, file })
);
