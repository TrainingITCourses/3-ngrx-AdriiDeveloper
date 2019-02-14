// NGRX
import { Action } from '@ngrx/store';

import { SearchCriteria } from 'app/models/criteria';

export enum CriterionActionValues {
  ValuesLoaded = '[Global] ValuesLoaded',
  ValuesSelected = '[Global] ValuesSelected',
  ValuesNotFound = '[Global] Values Not Found'
}

export class ValuesLoaded implements Action {
  readonly type = CriterionActionValues.ValuesLoaded;
  constructor(readonly payload: SearchCriteria[]) {}
}

export class ValuesSelected implements Action {
  readonly type = CriterionActionValues.ValuesSelected;
  constructor(readonly payload: string) {}
}

export class ValuesNotFound implements Action {
  readonly type = CriterionActionValues.ValuesNotFound;
  constructor(readonly payload: string) {}
}

export type ValuesActions = ValuesLoaded | ValuesSelected | ValuesNotFound;
