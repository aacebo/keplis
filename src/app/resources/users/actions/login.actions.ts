import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { IResponse } from '../../response.interface';

import { IUser } from '../models';

export const login = createAction(
  '[USERS] Login',
  props<{ email: string; }>(),
);

export const loginSuccess = createAction(
  '[USERS] LoginSuccess',
  props<{ res: IResponse<{ token: string; user: IUser; }> }>(),
);

export const loginFailed = createAction(
  '[USERS] LoginFailed',
  props<{ error: HttpErrorResponse; }>(),
);
