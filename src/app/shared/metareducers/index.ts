import { MetaReducer } from '@ngrx/store';
import { WebDevUtilsState } from '../reducers';
import { logoutMetareducer } from './auth.metareducer';

export const metaReducers: MetaReducer<WebDevUtilsState>[] = [
    logoutMetareducer
]