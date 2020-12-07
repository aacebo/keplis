import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { IResponse } from '../../response.interface';

import { IUser } from '../models';

export const token = createAction(
  '[USERS] Token',
  props<{ token: string; }>(),
);

export const tokenSuccess = createAction(
  '[USERS] TokenSuccess',
  props<{ res: IResponse<{ token: string; user: IUser; }> }>(),
);

export const tokenFailed = createAction(
  '[USERS] TokenFailed',
  props<{ error: HttpErrorResponse; }>(),
);
