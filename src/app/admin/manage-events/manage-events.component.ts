import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { GetProfile } from 'src/app/shared/enums/getProfile';

@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  styleUrls: ['./manage-events.component.scss'],
})
export class ManageEventsComponent implements OnInit {
  events:any[] = [];
  isAdmin = false;
  constructor(private router: Router, private adminService: AdminService, private authService: AuthService) {}
  ngOnInit(): void {   
    this.authService.isAdmin$.subscribe(isAdmin=>{
      this.isAdmin = isAdmin;
    }); 
    this.adminService.getEvents().subscribe((res:any) => {
      this.events = res.results;
      
    });
  }

  goToEvent() {
    this.router.navigate(['/admin/create-event']);
  }
}
