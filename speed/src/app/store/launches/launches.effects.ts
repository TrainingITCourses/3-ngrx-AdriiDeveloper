// Angular
import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';

import { LaunchesService } from 'app/services';

import { mergeMap, map, catchError } from 'rxjs/operators';

import { LaunchActionTypes, LaunchesLoaded, LaunchesNotFound } from './launches.actions';

@Injectable()
export class LaunchesEffects {

    constructor(private actions$: Actions,
                private launchesService: LaunchesService) {}

    @Effect()
    getLaunches$ = this.actions$
        .pipe(
            ofType(LaunchActionTypes.LoadLaunches),
            mergeMap(() =>
                this.launchesService
                .getLaunches$()
                .pipe(
                    map(launches => new LaunchesLoaded(launches)),
                    catchError((error) => of(new LaunchesNotFound()))
                )
            )
        );
}




