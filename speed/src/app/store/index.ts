import { MetaReducer, ActionReducerMap } from '@ngrx/store';

import * as fromTypes from './criterion-types/criterion-types.reducer';
import * as fromValues from './criterion-values/criterion-values.reducer';
import * as fromLaunches from './launches/launches.reducer';
import * as fromResults from './results/results.reducer';

export interface AppState {
    launches: fromLaunches.State;
    types: fromTypes.State;
    values: fromValues.State;
    results: fromResults.State;
}

export const reducers: ActionReducerMap<AppState> = {
    launches: fromLaunches.reducer,
    types: fromTypes.reducer,
    values: fromValues.reducer,
    results: fromResults.reducer
};

export const metaReducers: MetaReducer<AppState>[] = [];