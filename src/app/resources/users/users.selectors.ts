import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IUsersState } from './users.state';

export const selectState = createFeatureSelector<IUsersState>('users');
export const selectMe = createSelector(selectState, s => s.me);
export const selectToken = createSelector(selectState, s => s.token);
export const selectError = createSelector(selectState, s => s.error);
