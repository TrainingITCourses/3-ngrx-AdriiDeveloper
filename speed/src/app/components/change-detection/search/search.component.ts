// Angular
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from 'app/store';
import { ResultsLoaded } from 'app/store/results/results.actions';
import { LoadTypes, LoadStatus, LoadAgencies, TypesIdLoaded } from 'app/store/criterion-types/criterion-types.actions';
import { ValuesSelected } from 'app/store/criterion-values/criterion-values.actions';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  criterionType: string;

  constructor(private store: Store<AppState>) {}

  /**
   * Depending on the selected search criteria, the related types are collected
   * @param criterionType type of criterion
   */
  onCriterionTypeChange = (criterionType: string) => {
    this.criterionType = criterionType;

    this.store.dispatch(new ValuesSelected(criterionType));
    this.store.dispatch(new TypesIdLoaded(0));
    this.store.dispatch(new ResultsLoaded(null));

    switch (this.criterionType) {
      case 'agencies':
        this.store.dispatch(new LoadAgencies());
        break;
      case 'types':
        this.store.dispatch(new LoadTypes());
        break;
      case 'status':
        this.store.dispatch(new LoadStatus());
        break;
      default:
        throw new Error(`${this.criterionType} does not match any value`);
    }
  }
}
