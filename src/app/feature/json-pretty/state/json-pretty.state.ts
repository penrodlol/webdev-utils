import { JsonPrettyViewTypes } from '@json-pretty/enums/json-pretty-views.enum';
import { IJsonPrettyTreeNode } from '@json-pretty/models/json-pretty-tree-node.interface';

export interface IJsonPrettyState {
    raw: object;
    pretty: object | IJsonPrettyTreeNode[];
    view: JsonPrettyViewTypes.STRINGIFY | JsonPrettyViewTypes.TREE;
    error: string;
}

export const initialJsonPrettyState: IJsonPrettyState = {
    raw: null,
    pretty: null,
    view: null,
    error: null
};
