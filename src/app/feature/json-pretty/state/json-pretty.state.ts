import { JsonPrettyViewTypes } from '@json-pretty/enums/json-pretty-views.enum';
import { IJsonPrettyTreeNode } from '@json-pretty/models/json-pretty-tree-node.interface';

export interface IJsonPrettyState {
    json: object | IJsonPrettyTreeNode[];
    view: JsonPrettyViewTypes.STRINGIFY | JsonPrettyViewTypes.TREE;
    error: string;
}

export const initialJsonPrettyState: IJsonPrettyState = {
    json: null,
    view: null,
    error: null
};
