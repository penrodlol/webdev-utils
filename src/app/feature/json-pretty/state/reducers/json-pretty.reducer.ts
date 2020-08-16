import { createReducer, on } from '@ngrx/store';

import { initialJsonPrettyState } from '@json-pretty/state/json-pretty.state';
import { JsonPrettyUserActions } from '@json-pretty/state/actions';
import { JsonPrettyViewTypes } from '@json-pretty/enums/json-pretty-views.enum';

export const key = 'json-pretty';

export const reducer = createReducer(
    initialJsonPrettyState,
    on(
        JsonPrettyUserActions.clearJson,
        (state) => ({
            ...state,
            raw: null,
            pretty: null
        })
    ),
    on(
        JsonPrettyUserActions.stringifySuccess,
        (_, action) => ({
            raw: action.parsed,
            pretty: action.parsed,
            view: JsonPrettyViewTypes.STRINGIFY,
            error: null
        })
    ),
    on(
        JsonPrettyUserActions.treeSuccess,
        (_, action) => ({
            raw: action.parsed,
            pretty: action.nodes,
            view: JsonPrettyViewTypes.TREE,
            error: null
        })
    ),
    on(
        JsonPrettyUserActions.stringifyFailure,
        JsonPrettyUserActions.treeFailure,
        () => ({
            raw: null,
            pretty: null,
            error: 'Invalid JSON!',
            view: null
        })
    )
);
