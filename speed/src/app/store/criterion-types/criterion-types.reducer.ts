import { ResultCriteria } from 'app/models';

import { CriterionActionTypes, TypesActions } from './criterion-types.actions';

export interface State {
  id: number;
  types: ResultCriteria[];
}

export const initialState: State = {
  id: null,
  types: []
};

export function reducer(state = initialState, action: TypesActions): State {
  switch (action.type) {
    case CriterionActionTypes.LoadTypes:
      return { ...state };
    case CriterionActionTypes.LoadStatus:
      return { ...state };
    case CriterionActionTypes.LoadAgencies:
      return { ...state };
    case CriterionActionTypes.TypesLoaded:
      return { ...state, types: action.payload };
    case CriterionActionTypes.TypesIdLoaded:
      return { ...state, id: action.payload };
    case CriterionActionTypes.TypesNotFound:
      return { ...state };
    default:
      return state;
  }
} 