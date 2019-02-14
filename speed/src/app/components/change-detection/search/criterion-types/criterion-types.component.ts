// Angular
import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Store } from '@ngrx/store';

import { ResultCriteria } from 'app/models';
import { AppState } from 'app/store/index';
import { TypesIdLoaded } from 'app/store/criterion-types/criterion-types.actions';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-search-criterion-types',
  templateUrl: './criterion-types.component.html'
})
export class CriterionTypeComponent implements OnInit {

  criterionType: ResultCriteria[];

  constructor(private ref: ChangeDetectorRef, private store: Store<AppState>) {}

  ngOnInit() {
    // Get search types to store
    this.store.select('types').subscribe((state) => { 
      this.criterionType = state.types;
      this.ref.detectChanges();
    });
  }

  dispatchType = (id) => this.store.dispatch(new TypesIdLoaded(id));
}
