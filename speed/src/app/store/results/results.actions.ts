// NGRX
import { Action } from '@ngrx/store';

import { Launch } from 'app/models/launch';

export enum ActionResults {
  ResultsLoaded = '[Global] ResultsLoaded'
}

export class ResultsLoaded implements Action {
  readonly type = ActionResults.ResultsLoaded;
  constructor(readonly payload: Launch[]) {}
}

export type ResultsActions = ResultsLoaded;
