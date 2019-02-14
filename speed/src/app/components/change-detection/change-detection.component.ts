// Angular
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from 'app/store';
import { Launch } from 'app/models';
import { ResultsLoaded } from 'app/store/results/results.actions';
import { LoadLaunches } from 'app/store/launches/launches.actions';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html'
})
export class ChangeDetectionComponent implements OnInit {

  launches: Launch[];
  id: number = null;
  type = '';

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // Get Launches
    this.store.dispatch(new LoadLaunches());

    // Get launches to store
    this.store.select('launches').subscribe(state => {
      this.launches = state.launches;
    });

    this.store.select('types').subscribe((state) => {
      if (state.id) {
        this.id = state.id;
        if (this.type) this.LaunchCriterionChange();
      }
    });

    this.store.select('values').subscribe((state) => {
      this.type = state.selected ? state.selected : null;
    });
  }

  /**
   * This function performs a filtering in the launch library depending on the search performed
   * @param criterion type and id
   */
  LaunchCriterionChange = () => {
    // Clear launches array
    let filter = [];

    switch (this.type) {
      case 'agencies':
        filter = this.launches.filter(launch => ((launch.rocket.agencies ?
          launch.rocket.agencies.find(agency => agency.id === this.id) :
          false))
        );
        break;
      case 'types':
        filter = this.launches.filter(launch => launch.missions.find(mission => mission.type === this.id));
        break;
      case 'status':
        filter = this.launches.filter(launch => launch.status === this.id);
        break;
      default:
        throw new Error(`${this.type} does not match any value`);
    }

    // Set Results Filtered
    this.store.dispatch(new ResultsLoaded(filter));
  }
}
