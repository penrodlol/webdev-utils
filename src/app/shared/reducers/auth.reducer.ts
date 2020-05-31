import { createReducer, on } from '@ngrx/store';
import { initialAuthUserState } from '@feature/auth/state/auth-user.state';
import { AuthApiActions, AuthUserActions } from '@feature/auth/actions';

export const authReducer = createReducer(
    initialAuthUserState,
    on(
        AuthApiActions.loginSuccess,
        AuthUserActions.returningLogin,
        (_state, actions) => {
            return {
                uid: actions.uid,
                displayName: actions.displayName,
                email: actions.email,
                photoURL: actions.photoURL
            }
        }
    )
)
