import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.scss']
})
export class EventsTableComponent implements OnInit {
  @Input()
  set profileTableData(value: any) {
    console.log(value);
    this.dataSource.data = value;   
  }
  @Input() isAdmin:boolean = false;
  @Output() updateEmit = new EventEmitter();

  dataSource = new MatTableDataSource(this.profileTableData);
  constructor(private router:Router){}
  ngOnInit(): void {
    const x = [
      {
          "event_id": "QZ1L45U9",
          "event_title": "Node Js",
          "event_type": "Learn Tech",
          "event_location": "Thanjavur",
          "event_course": "One month course",
          "event_start_date": "2025-01-15",
          "event_end_date": "2025-11-15",
          "event_status": "A",
          "created_by": "1234",
          "created_date": "2025-02-20T13:00:00.000Z",
          "updated_by": "1234",
          "updated_date": "2025-02-20T13:00:00.000Z"
      },
      {
          "event_id": "123243",
          "event_title": "Testing",
          "event_type": "First",
          "event_location": "Chennai",
          "event_course": "Testing cource",
          "event_start_date": "2025-02-21",
          "event_end_date": "2025-02-28",
          "event_status": null,
          "created_by": null,
          "created_date": null,
          "updated_by": null,
          "updated_date": null
      }
  ]
  }


  retrieveAppointments(data: any) {
    
  }

  displayedColumns: string[] = ['event_title', 'event_type','event_location','event_course', 'event_start_date','event_end_date',  'action'];


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  edit_apt(value: any) {
    //this.router.navigate(['/apt-booking'], { state: value });
  }

  goToConsult(apt: any) {
    //this.router.navigate(['/pet-consultation-home'], { state: apt });
  }
  gotoEvent(event:any){
    this.router.navigate(['/admin/create-event'],{ state: event });
  }

}
