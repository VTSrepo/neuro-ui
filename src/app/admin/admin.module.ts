import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCreateComponent } from './event-create/event-create.component';
import { ManageEventsComponent } from './manage-events/manage-events.component';
import { EventsTableComponent } from './events-table/events-table.component'
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageVideosComponent } from './videos/manage-videos/manage-videos.component';
import { VideoTableComponent } from './videos/video-table/video-table.component';

@NgModule({
  declarations: [ManageEventsComponent, EventCreateComponent,EventsTableComponent, ManageVideosComponent, VideoTableComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class AdminModule {}
