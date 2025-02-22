import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Profile } from 'src/app/shared/models/profile';
import { CommonService, RefType } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-subscriber-home',
  templateUrl: './subscriber-home.component.html',
  styleUrls: ['./subscriber-home.component.scss'],
})
export class SubscriberHomeComponent implements OnInit {
  isAdmin: boolean = false;

  courses: Course[] = [];

  courseSelected: Course = { id: 0, name: '', label: '' };

  constructor(
    private homeService: HomeService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.isAdmin$.subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
    this.courses = [
      { id: 1, name: 'sample', label: 'Sample' },
      { id: 21, name: 'course1', label: 'Course1' },
      { id: 31, name: 'course2', label: 'Course2' },
    ];
  }
}

export interface Course {
  id: number;
  name: string;
  label: string;
}
