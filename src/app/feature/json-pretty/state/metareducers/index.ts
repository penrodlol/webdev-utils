import { MetaReducer } from '@ngrx/store';

import { IJsonPrettyState } from '../json-pretty.state';
import { jsonPrettyMetareducer } from './json-pretty.metareducer';

export const metaReducers: MetaReducer<IJsonPrettyState>[] = [
    jsonPrettyMetareducer
];
