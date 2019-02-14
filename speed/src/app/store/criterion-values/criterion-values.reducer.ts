import { SearchCriteria } from 'app/models';

import { ValuesActions, CriterionActionValues } from './criterion-values.actions';

export interface State {
  selected: string;
  values: SearchCriteria[];
}

export const initialState: State = {
  selected: null,
  values: []
};

export function reducer(state = initialState, action: ValuesActions): State {
  switch (action.type) {
    case CriterionActionValues.ValuesLoaded:
      return { ...state, values: action.payload };
    case CriterionActionValues.ValuesSelected:
      return { ...state, selected: action.payload };
    case CriterionActionValues.ValuesNotFound:
      return { ...state };
    default:
      return state;
  }
}