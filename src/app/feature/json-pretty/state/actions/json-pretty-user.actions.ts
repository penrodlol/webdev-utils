import { createAction } from '@ngrx/store';

import { IJsonPrettyTreeNode } from '@json-pretty/models/json-pretty-tree-node.interface';

export const clearAll = createAction('[JSON Pretty/User] Clear All JSON');

export const destroy = createAction('[JSON Pretty/User] Reset All JSON');

export const stringify = createAction(
    '[JSON Pretty/User] Stringify JSON',
    (original: string) => ({ original })
);

export const stringifySuccess = createAction(
    '[JSON Pretty/User] Stringify JSON Success',
    (stringified: object) => ({ stringified })
);

export const stringifyFailure = createAction('[JSON Pretty/User] Stringify JSON Failure');

export const tree = createAction(
    '[JSON Pretty/User] Tree JSON',
    (original: string) => ({ original })
);

export const treeSuccess = createAction(
    '[JSON Pretty/User] Tree JSON Success',
    (nodes: IJsonPrettyTreeNode[]) => ({ nodes })
);

export const treeFailure = createAction('[JSON Pretty/User] Tree JSON Failure');
