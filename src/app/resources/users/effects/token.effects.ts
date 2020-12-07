import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import jwtDecode from 'jwt-decode';

import { IAuthPayload } from '../../auth-payload.interface';

import { UsersHttpService } from '../services';
import * as actions from '../actions';

@Injectable()
export class TokenEffects {
  readonly token$ = createEffect(() => this._actions$.pipe(
    ofType(actions.token),
    switchMap(a => {
      const payload = jwtDecode<IAuthPayload>(a.token);

      return this._http.findOne(payload.username).pipe(
        map(res => actions.tokenSuccess({ res: { ...res, data: { token: a.token, user: res.data } } })),
        catchError(error => of(actions.tokenFailed({ error }))),
      );
    }),
  ));

  constructor(
    private readonly _actions$: Actions,
    private readonly _http: UsersHttpService,
  ) { }
}
