import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { IJsonPrettyState } from '@json-pretty/state/json-pretty.state';
import { JsonPrettySelectors } from '@json-pretty/state/selectors';
import { IJsonPrettyTreeNode } from '@json-pretty/models/json-pretty-tree-node.interface';
import { JsonPrettyViewTypes } from '@json-pretty/enums/json-pretty-views.enum';

import { Observable } from 'rxjs';

@Component({
  selector: 'json-pretty-result',
  templateUrl: './json-pretty-result.component.html',
  styleUrls: ['./json-pretty-result.component.scss']
})
export class JsonPrettyResultComponent {
  json$: Observable<object | IJsonPrettyTreeNode[]> = this.store.select(JsonPrettySelectors.selectPretty);
  view$: Observable<string> = this.store.select(JsonPrettySelectors.selectView);

  JSON_PRETTY_VIEW_TYPES = JsonPrettyViewTypes;

  constructor(
    private store: Store<IJsonPrettyState>
  ) { }

}
