import { initialAuthUserState } from '@shared/state/auth/auth-user.state';

import { AuthApiActions, AuthUserActions } from '@auth/actions';

import { createReducer, on } from '@ngrx/store';

export const authReducer = createReducer(
    initialAuthUserState,
    on(
        AuthApiActions.loginSuccess,
        AuthUserActions.returningLogin,
        (_state, actions) => {
            return {
                displayName: actions.displayName,
                email: actions.email,
                photoURL: actions.photoURL
            }
        }
    ),
    on(
        AuthApiActions.downloadURLRetrievalSuccess,
        (state, actions) => {
            return {
                ...state,
                photoURL: actions.downloadURL
            }
        }
    )
)
