import { HttpErrorResponse } from '@angular/common/http';
import { Action, combineReducers } from '@ngrx/store';

import { IUser } from './models';
import * as fromReducers from './reducers';

export interface IUsersState {
  readonly me?: IUser;
  readonly token?: string;
  readonly error?: HttpErrorResponse;
}

export function reducers(state: IUsersState, action: Action) {
  return combineReducers<IUsersState>({
    me: fromReducers.meReducer,
    token: fromReducers.tokenReducer,
    error: fromReducers.errorReducer,
  })(state, action);
}
