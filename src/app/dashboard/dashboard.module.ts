import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MoviesComponent } from './movies/movies.component';
import { SharedModule } from '../shared.module';
import { MoviesListComponent } from './movies-list/movies-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MoviesComponent,
    MoviesListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
