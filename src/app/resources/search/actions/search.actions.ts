import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { IResponse } from '../../response.interface';
import { IPagination } from '../../pagination.interface';

import { IUser } from '../../users';

export const search = createAction(
  '[SEARCH] Search',
  props<{ req: IPagination; }>(),
);

export const searchSuccess = createAction(
  '[SEARCH] SearchSuccess',
  props<{ users: IResponse<IUser[]>; }>(),
);

export const searchFailed = createAction(
  '[SEARCH] SearchFailed',
  props<{ error: HttpErrorResponse; }>(),
);
