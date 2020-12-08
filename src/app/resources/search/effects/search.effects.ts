import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { forkJoin, of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import { UsersHttpService } from '../../users';

import * as actions from '../actions';

@Injectable()
export class SearchEffects {
  readonly search$ = createEffect(() => this._actions$.pipe(
    ofType(actions.search),
    switchMap(a => {
      return forkJoin([
        this._http.find(a.req),
      ]).pipe(
        map(v => actions.searchSuccess({ users: v[0] })),
        catchError(error => of(actions.searchFailed({ error }))),
      );
    }),
  ));

  constructor(
    private readonly _actions$: Actions,
    private readonly _http: UsersHttpService,
  ) { }
}
