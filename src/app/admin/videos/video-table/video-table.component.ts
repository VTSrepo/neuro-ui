import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-table',
  templateUrl: './video-table.component.html',
  styleUrls: ['./video-table.component.scss']
})
export class VideoTableComponent {
@Input()
  set videoTableData(value: any) {   
    this.dataSource.data = value;   
  }
  
  @Output() updateEmit = new EventEmitter();
  embedCode:any;

  dataSource = new MatTableDataSource(this.videoTableData);
  constructor(private router:Router,private sanitizer: DomSanitizer){}
  ngOnInit(): void {
    
  }


  retrieveAppointments(data: any) {
    
  }

  displayedColumns: string[] = ['title', 'description', 'action'];


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  view(element:any){
    this.embedCode = this.sanitizer.bypassSecurityTrustHtml(element.embed_code);
  }

  
  

}
