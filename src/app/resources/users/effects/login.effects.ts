import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, map, tap } from 'rxjs/operators';

import { UsersHttpService } from '../services';
import * as actions from '../actions';

@Injectable()
export class LoginEffects {
  readonly login$ = createEffect(() => this._actions$.pipe(
    ofType(actions.login),
    switchMap(a =>
      this._http.login(a.email).pipe(
        map(res => actions.loginSuccess({ res })),
        catchError(error => of(actions.loginFailed({ error }))),
      ),
    ),
  ));

  readonly loginSuccess$ = createEffect(() => this._actions$.pipe(
    ofType(actions.loginSuccess),
    tap(a => {
      localStorage.setItem('keplis:token', a.res.data.token);
      this._router.navigateByUrl('/');
    }),
  ), { dispatch: false });

  constructor(
    private readonly _actions$: Actions,
    private readonly _router: Router,
    private readonly _http: UsersHttpService,
  ) { }
}
