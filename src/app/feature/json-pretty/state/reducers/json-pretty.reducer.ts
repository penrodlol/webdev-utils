import { createReducer, on } from '@ngrx/store';

import { initialJsonPrettyState } from '@json-pretty/state/json-pretty.state';
import { JsonPrettyUserActions } from '@json-pretty/state/actions';
import { JsonPrettyViewTypes } from '@json-pretty/enums/json-pretty-views.enum';

export const key = 'json-pretty';

export const reducer = createReducer(
    initialJsonPrettyState,
    on(
        JsonPrettyUserActions.stringifySuccess,
        (state, action) => ({
            ...state,
            json: action.stringified,
            view: JsonPrettyViewTypes.STRINGIFY
        })
    ),
    on(
        JsonPrettyUserActions.treeSuccess,
        (state, action) => ({
            ...state,
            json: action.nodes,
            view: JsonPrettyViewTypes.TREE
        })
    ),
    on(
        JsonPrettyUserActions.stringifyFailure,
        JsonPrettyUserActions.treeFailure,
        (state, _) => ({
            ...state,
            error: 'Invalid JSON!',
            json: null,
            view: null
        })
    )
);
