import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IUser } from '../models';
import { IUsersState } from '../users.state';
import * as selectors from '../users.selectors';
import * as actions from '../actions';

@Injectable({ providedIn: 'root' })
export class UsersService {
  readonly state$: Observable<IUsersState>;
  readonly me$: Observable<IUser>;
  readonly token$: Observable<string>;
  readonly error$: Observable<HttpErrorResponse>;

  constructor(private readonly _store$: Store<IUsersState>) {
    this.state$ = this._store$.pipe(select(selectors.selectState));
    this.me$ = this._store$.pipe(select(selectors.selectMe));
    this.token$ = this._store$.pipe(select(selectors.selectToken));
    this.error$ = this._store$.pipe(select(selectors.selectError));
  }

  login(email: string) {
    this._store$.dispatch(actions.login({ email }));
  }

  token(token: string) {
    this._store$.dispatch(actions.token({ token }));
  }
}
