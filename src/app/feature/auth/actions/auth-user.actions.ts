import { createAction } from '@ngrx/store';

export const googleLogin = createAction('[Auth/User] Login Google');

export const standardLogin = createAction(
    '[Auth/User] Login Standard',
    (email: string, password: string) => ({ email, password })
);

export const logout = createAction('[Auth/User] Logout');
