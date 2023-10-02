import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardContentComponent } from './modules/content/dashboard-content/dashboard-content.component';
import { ScheduleContentComponent } from './modules/content/schedule-content/schedule-content.component';


const routes: Routes = [

  // catch all 
  {path: '', pathMatch : 'full', redirectTo: 'schedule'},

  // primary routes to navigate between
  { path: 'schedule', component: ScheduleContentComponent },
  { path: 'dashboard', component: DashboardContentComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
