import { MetaReducer } from '@ngrx/store';
import { WebDevUtilsState } from '../state';
import { logoutMetareducer } from './auth.metareducer';

export const metaReducers: MetaReducer<WebDevUtilsState>[] = [
    logoutMetareducer
]