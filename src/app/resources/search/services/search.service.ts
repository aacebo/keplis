import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IResponse } from '../../response.interface';
import { IPagination } from '../../pagination.interface';
import { IUser } from '../../users';

import { ISearchState } from '../search.state';
import * as selectors from '../search.selectors';
import * as actions from '../actions';

@Injectable({ providedIn: 'root' })
export class SearchService {
  readonly state$: Observable<ISearchState>;
  readonly value$: Observable<string>;
  readonly users$: Observable<IResponse<IUser[]>>;
  readonly error$: Observable<HttpErrorResponse>;

  constructor(private readonly _store$: Store<ISearchState>) {
    this.state$ = this._store$.pipe(select(selectors.selectState));
    this.value$ = this._store$.pipe(select(selectors.selectValue));
    this.users$ = this._store$.pipe(select(selectors.selectUsers));
    this.error$ = this._store$.pipe(select(selectors.selectError));
  }

  search(req: IPagination) {
    this._store$.dispatch(actions.search({ req }));
  }
}
