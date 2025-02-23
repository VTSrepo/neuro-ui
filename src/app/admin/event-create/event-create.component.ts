import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { AdminService } from '../admin.service';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from 'src/app/shared/info-dialog/info-dialog.component';
import { NavigationEnd, Router } from '@angular/router';
import { CommonService, RefType } from 'src/app/shared/services/common.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { filter } from 'rxjs';
import { Course } from 'src/app/home/subscriber-home/subscriber-home.component';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss'],
})
export class EventCreateComponent implements OnInit {
  event: any = {
    event_id: '',
    event_title: '',
    event_type: '',
    event_location: '',
    event_course: '',
    event_start_date: '',
    event_end_date: '',
    event_status: null,
    created_by: JSON.parse(localStorage.getItem('user') || '{}').user_id,
    created_date: JSON.parse(localStorage.getItem('user') || '{}').user_id,
    updated_by: null,
    updated_date: null,
  };

  todaysDate = '';
  courses: Course[] = [];
  eventTypes = ['Online', 'In Person'];

  isAdmin: boolean = false;

  constructor(
    private utility: UtilityService,
    private adminService: AdminService,
    private commonService: CommonService,
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.courses = [
      { id: 1, name: 'sample', label: 'Sample' },
      { id: 21, name: 'course1', label: 'Course1' },
      { id: 31, name: 'course2', label: 'Course2' },
    ];
    this.authService.isAdmin$.subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
    if (history.state && history.state.event_id) {
      this.event = history.state;
    } else {
      this.todaysDate = this.utility.convertTodayTostr();
    }
  }

  save() {
    this.event.created_by = JSON.parse(
      localStorage.getItem('user') || '{}'
    ).user_id;
    this.event.updated_by = JSON.parse(
      localStorage.getItem('user') || '{}'
    ).user_id;
    this.adminService.saveEvent(this.event).subscribe((data) => {
      const dialogRef = this.dialog.open(InfoDialogComponent, {
        width: '500px',
        data: 'Event Saved',
      });

      dialogRef.afterClosed().subscribe((data) => {
        this.router.navigate(['/admin/events']);
      });
    });
  }

  back() {
    this.router.navigate(['/admin/events']);
  }
}
