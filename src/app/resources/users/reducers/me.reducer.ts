import { createReducer, on } from '@ngrx/store';

import * as actions from '../actions';
import { IUser } from '../models';

export const meReducer = createReducer<IUser>(
  undefined,
  on(actions.loginSuccess, actions.tokenSuccess, (_, action) => action.res.data.user),
  on(actions.loginFailed, actions.tokenFailed, (_) => undefined),
);
