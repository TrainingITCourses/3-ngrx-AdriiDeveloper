import { Launch } from '../../models/launch';

import { LaunchActions, LaunchActionTypes } from './launches.actions';

export interface State {
  error: boolean;
  launches: Launch[];
}

export const initialState: State = {
  error: false,
  launches: []
};

export function reducer(state = initialState, action: LaunchActions): State {
  switch (action.type) {
    case LaunchActionTypes.LoadLaunches:
      return { ...state };
    case LaunchActionTypes.LaunchesLoaded:
      return { ...state, launches: action.payload, error: false };
    case LaunchActionTypes.LaunchesNotFound:
      return { ...state, error: true };
    default:
      return state;
  }
}