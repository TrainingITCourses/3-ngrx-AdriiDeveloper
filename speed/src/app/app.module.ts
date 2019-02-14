// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSelectModule, MatFormFieldModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ChangeDetectionComponent, CriterionTypeComponent, CriterionValuesComponent, 
         ResultsComponent, SearchComponent } from './components';

import { metaReducers, reducers } from './store/index';
import { TypesEffects } from './store/criterion-types/criterion-types.effects';
import { LaunchesEffects } from './store/launches/launches.effects';

@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectionComponent,
    CriterionTypeComponent,
    CriterionValuesComponent,
    ResultsComponent,
    SearchComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([LaunchesEffects, TypesEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
