// Angular
import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';

import { LaunchesService } from 'app/services';

import { mergeMap, map, catchError } from 'rxjs/operators';

import { CriterionActionTypes, TypesLoaded, TypesNotFound } from './criterion-types.actions';

@Injectable()
export class TypesEffects {

    constructor(private actions$: Actions,
                private launchesService: LaunchesService) {}

    @Effect()
    getTypes$ = this.actions$
        .pipe(
            ofType(CriterionActionTypes.LoadTypes),
            mergeMap(() =>
                this.launchesService
                .getTypes$()
                .pipe(
                    map(types => new TypesLoaded(types))
                )
            )
        );
        
    @Effect()
    getStatus$ = this.actions$
        .pipe(
            ofType(CriterionActionTypes.LoadStatus),
            mergeMap(() =>
                this.launchesService
                .getStatus$()
                .pipe(
                    map(launches => new TypesLoaded(launches))
                )
            )
        );
    
    @Effect()
    getAgencies$ = this.actions$
        .pipe(
            ofType(CriterionActionTypes.LoadAgencies),
            mergeMap(() =>
                this.launchesService
                .getAgencies$()
                .pipe(
                    map(agencies => new TypesLoaded(agencies))
                )
            )
        );
}




