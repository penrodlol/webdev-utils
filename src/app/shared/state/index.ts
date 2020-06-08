import { authReducer } from "./auth/reducers/auth.reducer";

import { IAuthUserState } from '@shared/state/auth/auth-user.state';

import { ActionReducerMap } from '@ngrx/store';

export interface WebDevUtilsState {
    auth: IAuthUserState
}

export const reducers: ActionReducerMap<WebDevUtilsState> = {
    auth: authReducer
};
