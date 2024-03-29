import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [{
  path:'movies',
  component:MoviesListComponent,
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
