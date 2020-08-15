import { ActionReducer } from '@ngrx/store';

import { IJsonPrettyState } from '@json-pretty/state/json-pretty.state';
import { JsonPrettyUserActions } from '@json-pretty/state/actions';

export function jsonPrettyMetareducer(reducer: ActionReducer<any>) {
    return function(state: IJsonPrettyState, action: any): any {
        switch (action.type) {
            case JsonPrettyUserActions.clearAll.type: return reducer(undefined, action);
            case JsonPrettyUserActions.destroy.type: return reducer(undefined, action);
            default: return reducer({...state, error: null}, action);
        }
    };
}
