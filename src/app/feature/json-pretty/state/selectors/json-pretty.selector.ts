import { createSelector, createFeatureSelector } from '@ngrx/store';

import { IJsonPrettyState } from '@json-pretty/state/json-pretty.state';
import { JsonPrettyReducer } from '@json-pretty/state/reducers';
import { IJsonPrettyTreeNode } from '@json-pretty/models/json-pretty-tree-node.interface';

const selectJsonPretty = createFeatureSelector(JsonPrettyReducer.key);

export const selectJson = createSelector(selectJsonPretty, (state: IJsonPrettyState): object | IJsonPrettyTreeNode[] => state.json);
export const selectView = createSelector(selectJsonPretty, (state: IJsonPrettyState): string => state.view);
export const selectError = createSelector(selectJsonPretty, (state: IJsonPrettyState): string => state.error);
