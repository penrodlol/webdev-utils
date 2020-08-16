import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { JsonPrettyService } from '@json-pretty/services/json-pretty.service';
import { JsonPrettyUserActions } from '@json-pretty/state/actions';
import { IJsonPrettyState } from '@json-pretty/state/json-pretty.state';
import { JsonPrettySelectors } from '@json-pretty/state/selectors';

import { switchMap, map, tap, concatMap, withLatestFrom, filter } from 'rxjs/operators';
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
                    map(nodes => JsonPrettyUserActions.treeSuccess(parsed, nodes))
                );
            } catch {
                return of(JsonPrettyUserActions.treeFailure());
            }
        })
    ));

    blob$ = createEffect(() => this.actions$.pipe(
        ofType(JsonPrettyUserActions.download, JsonPrettyUserActions.expand),
        concatMap(action => of(action).pipe(
            withLatestFrom(this.store.select(JsonPrettySelectors.selectJson))
        )),
        filter(([_, json]) => json.raw != null && json.pretty != null),
        tap(([action, json]) => {
            if (action.type === JsonPrettyUserActions.download.type) {
                this.jsonPrettyService.download(json.raw);
            } else if (action.type === JsonPrettyUserActions.expand.type) {
                this.jsonPrettyService.expand(json.raw);
            }
        })
    ), { dispatch: false });

    private parse = (json: any) => JSON.parse(json);

    constructor(
        private actions$: Actions,
        private jsonPrettyService: JsonPrettyService,
        private store: Store<IJsonPrettyState>
    ) { }
}
