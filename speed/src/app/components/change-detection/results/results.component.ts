// Angular
import { ChangeDetectorRef, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from 'app/store';
import { Launch } from 'app/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnInit {

  filteredLaunches: Launch[] = null;
  show: boolean = true;

  constructor(private ref: ChangeDetectorRef, private store: Store<AppState>) {}

  ngOnInit() {
    // Get launches to store
    this.store.select('results').subscribe((state) => {
      this.show = !state.results ? false : true;
      this.filteredLaunches = state.results;
      this.ref.detectChanges();
    });
  }
}
