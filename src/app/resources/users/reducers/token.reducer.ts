import { createReducer, on } from '@ngrx/store';

import * as actions from '../actions';

export const tokenReducer = createReducer<string>(
  undefined,
  on(actions.loginSuccess, actions.tokenSuccess, (_, action) => action.res.data.token),
  on(actions.loginFailed, actions.tokenFailed, (_) => undefined),
);
