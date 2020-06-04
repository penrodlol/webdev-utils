import { authReducer } from "./auth/reducers/auth.reducer";
import { ActionReducerMap } from '@ngrx/store';
import { IAuthUserState } from 'src/app/shared/state/auth/auth-user.state';

export interface WebDevUtilsState {
    auth: IAuthUserState
}

export const reducers: ActionReducerMap<WebDevUtilsState> = {
    auth: authReducer
};
