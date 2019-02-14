// NGRX
import { Action } from '@ngrx/store';

import { ResultCriteria } from 'app/models/criteria';

export enum CriterionActionTypes {
  LoadTypes = '[Global] LoadTypes',
  LoadStatus = '[Global] LoadStatus',
  LoadAgencies = '[Global] LoadAgencies',
  TypesLoaded = '[Global] TypesLoaded',
  TypesIdLoaded = '[Global] Types Id Loaded',
  TypesNotFound = '[Global] Types Not Found'
}

export class LoadTypes implements Action {
  readonly type = CriterionActionTypes.LoadTypes;
}

export class LoadStatus implements Action {
  readonly type = CriterionActionTypes.LoadStatus;
}

export class LoadAgencies implements Action {
  readonly type = CriterionActionTypes.LoadAgencies;
}

export class TypesLoaded implements Action {
  readonly type = CriterionActionTypes.TypesLoaded;
  constructor(readonly payload: ResultCriteria[]) {}
}

export class TypesIdLoaded implements Action {
  readonly type = CriterionActionTypes.TypesIdLoaded;
  constructor(readonly payload: number) {}
}

export class TypesNotFound implements Action {
  readonly type = CriterionActionTypes.TypesNotFound;
}

export type TypesActions = LoadTypes | LoadStatus | LoadAgencies | TypesLoaded | TypesIdLoaded | TypesNotFound;
