import { Component, Input } from '@angular/core';

import { Store } from '@ngrx/store';

import { IJsonPrettyState } from '@json-pretty/state/json-pretty.state';
import { JsonPrettyUserActions } from '@json-pretty/state/actions';

@Component({
  selector: 'json-pretty-actions',
  templateUrl: './json-pretty-actions.component.html',
  styleUrls: ['./json-pretty-actions.component.scss']
})
export class JsonPrettyActionsComponent {
  @Input() json: string;

  constructor(
    private store: Store<IJsonPrettyState>
  ) { }

  stringify = () => !this.isEmpty() ? this.store.dispatch(JsonPrettyUserActions.stringify(this.json)) : null;

  tree = () => !this.isEmpty() ? this.store.dispatch(JsonPrettyUserActions.tree(this.json)) : null;

  private isEmpty = (): boolean => !this.json || this.json.trim().length === 0;

}
