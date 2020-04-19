import { createAction } from '@ngrx/store';

export const login = createAction(
    '[Auth/User] Login',
    (email?: string, password?: string) => ({ email, password })
);

export const logout = createAction('[Auth/User] Logout');
