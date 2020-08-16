import { createSelector, createFeatureSelector } from '@ngrx/store';

import { IJsonPrettyState } from '@json-pretty/state/json-pretty.state';
import { JsonPrettyReducer } from '@json-pretty/state/reducers';
import { IJsonPrettyTreeNode } from '@json-pretty/models/json-pretty-tree-node.interface';

const selectJsonPretty = createFeatureSelector<IJsonPrettyState>(JsonPrettyReducer.key);

export const selectRaw = createSelector(selectJsonPretty, (state): object => state.raw);
export const selectPretty = createSelector(selectJsonPretty, (state): object | IJsonPrettyTreeNode[] => state.pretty);
export const selectView = createSelector(selectJsonPretty, (state): string => state.view);
export const selectError = createSelector(selectJsonPretty, (state): string => state.error);

export const selectJson = createSelector(
    selectRaw,
    selectPretty,
    (raw, pretty) => ({ raw, pretty })
);
