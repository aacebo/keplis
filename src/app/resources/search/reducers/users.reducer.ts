import { createReducer, on } from '@ngrx/store';

import { IResponse } from '../../response.interface';
import { IUser } from '../../users';

import * as actions from '../actions';

export const usersReducer = createReducer<IResponse<IUser[]>>(
  undefined,
  on(actions.searchSuccess, (_, action) => action.users),
  on(actions.searchFailed, (_) => undefined),
);
