import { createReducer, on } from '@ngrx/store';

import * as actions from '../actions';

export const valueReducer = createReducer<string>(
  undefined,
  on(actions.search, (_, action) => action.req.filter),
);
