import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ISearchState } from './search.state';

export const selectState = createFeatureSelector<ISearchState>('search');
export const selectValue = createSelector(selectState, s => s.value);
export const selectUsers = createSelector(selectState, s => s.users);
export const selectError = createSelector(selectState, s => s.error);
