// Angular
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from 'app/store';
import { SearchCriteria } from 'app/models';

import { ValuesLoaded } from '../../../../store/criterion-values/criterion-values.actions';

import { INIT_VALUES } from './configuration/init-values';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-search-criterion-values',
  templateUrl: './criterion-values.component.html'
})
export class CriterionValuesComponent implements OnInit {

  searchCriteria: SearchCriteria[] = [];

  @Output() criterionTypeChange = new EventEmitter<string>();
 
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new ValuesLoaded(INIT_VALUES.data));

    // Get search criteria to store
    this.store.select('values').subscribe((state) =>  this.searchCriteria = state.values);
  }
}