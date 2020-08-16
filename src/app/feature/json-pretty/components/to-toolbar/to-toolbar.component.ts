import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { IJsonPrettyState } from '@json-pretty/state/json-pretty.state';
import { JsonPrettyUserActions } from '@json-pretty/state/actions';

@Component({
  selector: 'to-toolbar',
  templateUrl: './to-toolbar.component.html',
  styleUrls: ['./to-toolbar.component.scss']
})
export class ToToolbarComponent {

  constructor(
    private store: Store<IJsonPrettyState>
  ) { }

  clear = () => this.store.dispatch(JsonPrettyUserActions.clearJson());

  download = () => this.store.dispatch(JsonPrettyUserActions.download());

  expand = () => this.store.dispatch(JsonPrettyUserActions.expand());

}
