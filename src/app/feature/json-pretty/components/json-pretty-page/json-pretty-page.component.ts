import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Store } from '@ngrx/store';

import { IJsonPrettyState } from '@json-pretty/state/json-pretty.state';
import { JsonPrettyUserActions } from '@json-pretty/state/actions';

@Component({
  selector: 'app-json-pretty-page',
  templateUrl: './json-pretty-page.component.html',
  styleUrls: ['./json-pretty-page.component.scss']
})
export class JsonPrettyPageComponent implements OnDestroy {
  jsonPrettyForm: FormGroup = this.fb.group({ json: null });

  constructor(
    private fb: FormBuilder,
    private store: Store<IJsonPrettyState>
  ) { }

  ngOnDestroy(): void {
    this.store.dispatch(JsonPrettyUserActions.destroy());
  }

  reset = () => this.jsonPrettyForm.reset(this.json(), { emitEvent: false });

  json = () => this.jsonPrettyForm.get('json');

}
