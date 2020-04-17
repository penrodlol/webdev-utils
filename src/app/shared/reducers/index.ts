import { authReducer } from "./auth.reducer";
import { ActionReducerMap } from '@ngrx/store';
import { IAuthUserState } from '@feature/auth/state/auth-user.state';

export interface WebDevUtilsState {
    auth: IAuthUserState
}

export const reducers: ActionReducerMap<WebDevUtilsState> = {
    auth: authReducer
};
