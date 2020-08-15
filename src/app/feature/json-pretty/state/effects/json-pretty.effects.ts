import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { JsonPrettyService } from '@json-pretty/services/json-pretty.service';
import { JsonPrettyUserActions } from '@json-pretty/state/actions';

import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class JsonPrettyEffects {
    stringify$ = createEffect(() => this.actions$.pipe(
        ofType(JsonPrettyUserActions.stringify),
        switchMap(actions => {
            try {
                const parsed = this.parse(actions.original);
                return of(JsonPrettyUserActions.stringifySuccess(parsed));
            } catch {
                return of(JsonPrettyUserActions.stringifyFailure());
            }
        })
    ));

    tree$ = createEffect(() => this.actions$.pipe(
        ofType(JsonPrettyUserActions.tree),
        switchMap(actions => {
            try {
                const parsed = this.parse(actions.original);
                return of(this.jsonPrettyService.build(parsed)).pipe(
                    map(nodes => JsonPrettyUserActions.treeSuccess(nodes))
                );
            } catch {
                return of(JsonPrettyUserActions.treeFailure());
            }
        })
    ));

    private parse = (json: any) => JSON.parse(json);

    constructor(
        private actions$: Actions,
        private jsonPrettyService: JsonPrettyService
    ) { }
}
