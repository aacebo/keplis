import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';

import * as actions from '../actions';

export const errorReducer = createReducer<HttpErrorResponse>(
  undefined,
  on(actions.searchFailed, (_, action) => action.error),
);
