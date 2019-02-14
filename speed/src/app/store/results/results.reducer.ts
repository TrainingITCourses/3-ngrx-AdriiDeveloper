import { Launch } from 'app/models';

import { ResultsActions, ActionResults } from './results.actions';

export interface State {
  results: Launch[];
}

export const initialState: State = {
  results: []
};

export function reducer(state = initialState, action: ResultsActions): State {
  switch (action.type) {
    case ActionResults.ResultsLoaded:
      return { ...state, results : action.payload };
    default:
      return state;
  }
}