import { IAuthUserState } from '@shared/state/auth/auth-user.state';

import { WebDevUtilsState } from '../..';

import { createSelector } from '@ngrx/store';

export const selectUser = (state: WebDevUtilsState): IAuthUserState => state.auth;

export const selectUid = createSelector(selectUser, (user: IAuthUserState): string => user.uid);
export const selectDisplayName = createSelector(selectUser, (user: IAuthUserState): string => user.displayName);
export const selectEmail = createSelector(selectUser, (user: IAuthUserState): string => user.email);
export const selectPhotoUrl = createSelector(selectUser, (user: IAuthUserState): string => user.photoURL);
