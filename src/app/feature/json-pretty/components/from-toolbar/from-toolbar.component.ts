import { Component, Output, EventEmitter } from '@angular/core';

import { Store } from '@ngrx/store';

import { JsonPrettySelectors } from '@json-pretty/state/selectors';
import { IJsonPrettyState } from '@json-pretty/state/json-pretty.state';
import { JsonPrettyUserActions } from '@json-pretty/state/actions';

import { Observable } from 'rxjs';

@Component({
  selector: 'from-toolbar',
  templateUrl: './from-toolbar.component.html',
  styleUrls: ['./from-toolbar.component.scss']
})
export class FromToolbarComponent {
  @Output() cleared: EventEmitter<boolean> = new EventEmitter<boolean>();

  error$: Observable<string> = this.store.select(JsonPrettySelectors.selectError);

  constructor(
    private store: Store<IJsonPrettyState>
  ) { }

  clearAll() {
    this.store.dispatch(JsonPrettyUserActions.clearAll());
    this.cleared.emit(true);
  }

}
