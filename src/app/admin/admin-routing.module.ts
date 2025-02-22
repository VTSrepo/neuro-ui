import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CanActivateRoute} from '../shared/services/authguard.service';
import { ManageEventsComponent } from './manage-events/manage-events.component';
import { EventCreateComponent } from './event-create/event-create.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'events',
    component: ManageEventsComponent,
  },
  {
    path:'create-event',
    component:EventCreateComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
