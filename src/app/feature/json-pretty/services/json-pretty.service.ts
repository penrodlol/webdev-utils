import { Injectable } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

import { saveAs } from 'file-saver';
import { v4 as uuid } from 'uuid';

import { IJsonPrettyTreeNode } from '@json-pretty/models/json-pretty-tree-node.interface';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonPrettyService {

  constructor(
    private clipboard: Clipboard
  ) {}

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

  download = (json: object) => saveAs(this.blob(json), uuid());

  expand(json: object) {
    const url = window.URL.createObjectURL(this.blob(json));
    window.open(url);
    window.URL.revokeObjectURL(url);
  }

  copy = (json: object): Observable<boolean> => of(this.clipboard.copy(this.stringify(json)));

  private stringify = (json: object) => JSON.stringify(json, null, 2);

  private blob = (json: object) => new Blob(
    [this.stringify(json)],
    { type: 'text/plain;charset=utf-8'}
  )

}
