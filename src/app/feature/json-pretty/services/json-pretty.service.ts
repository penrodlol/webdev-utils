import { Injectable } from '@angular/core';

import { saveAs } from 'file-saver';
import { v4 as uuid } from 'uuid';

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

  download(json: object) {
    const blob = new Blob(
      [JSON.stringify(json, null, 2)],
      { type: 'text/plain;charset=utf-8'}
    );
    saveAs(blob, uuid());
  }
}
