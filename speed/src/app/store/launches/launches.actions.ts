// NGRX
import { Action } from '@ngrx/store';

import { Launch } from 'app/models';

export enum LaunchActionTypes {
  LoadLaunches = '[Global] LoadLaunches',
  LaunchesLoaded = '[Global] LaunchesLoaded',
  LaunchesNotFound = '[Global] Launches Not Found'
}

export class LoadLaunches implements Action {
  readonly type = LaunchActionTypes.LoadLaunches;
}

export class LaunchesLoaded implements Action {
  readonly type = LaunchActionTypes.LaunchesLoaded;
  constructor(readonly payload: Launch[]) {}
}

export class LaunchesNotFound implements Action {
  readonly type = LaunchActionTypes.LaunchesNotFound;
}

export type LaunchActions = LoadLaunches | LaunchesLoaded | LaunchesNotFound;
