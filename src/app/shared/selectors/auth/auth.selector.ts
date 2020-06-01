import { IAuthUserState } from '@feature/auth/state/auth-user.state';
import { createSelector } from '@ngrx/store';
import { WebDevUtilsState } from '../../reducers';

export const selectUser = (state: WebDevUtilsState): IAuthUserState => state.auth;

export const selectUID = createSelector(selectUser, (user: IAuthUserState): string => user.uid);
export const selectDisplayName = createSelector(selectUser, (user: IAuthUserState): string => user.displayName);
export const selectEmail = createSelector(selectUser, (user: IAuthUserState): string => user.email);
export const selectPhotoUrl = createSelector(selectUser, (user: IAuthUserState): string => user.photoURL);
