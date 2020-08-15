import { Injectable } from '@angular/core';

import { IJsonPrettyTreeNode } from '@json-pretty/models/json-pretty-tree-node.interface';

@Injectable({
  providedIn: 'root'
})
export class JsonPrettyService {
  build(json: object): IJsonPrettyTreeNode[] {
    return Object
      .keys(json)
      .reduce((acc, key) => {
        const hasChildren = json[key] instanceof Object;

        const node: IJsonPrettyTreeNode = {
          name: key,
          value: hasChildren ? null : json[key],
          children: hasChildren ? this.build(json[key]) : []
        };

        return acc.concat(node);
      }, []);
  }
}
