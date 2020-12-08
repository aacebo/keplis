import { HttpErrorResponse } from '@angular/common/http';
import { Action, combineReducers } from '@ngrx/store';

import { IResponse } from '../response.interface';
import { IUser } from '../users';

import * as fromReducers from './reducers';

export interface ISearchState {
  readonly value?: string;
  readonly users?: IResponse<IUser[]>;
  readonly error?: HttpErrorResponse;
}

export function reducers(state: ISearchState, action: Action) {
  return combineReducers<ISearchState>({
    value: fromReducers.valueReducer,
    users: fromReducers.usersReducer,
    error: fromReducers.errorReducer,
  })(state, action);
}
