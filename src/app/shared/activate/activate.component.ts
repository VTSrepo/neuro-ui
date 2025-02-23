import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss'],
})
export class ActivateComponent implements OnInit {
  code: string = '';
  userId: string = '';
  activate() {}
  constructor(private route: ActivatedRoute) {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { order: "popular" }

       

       
      }
    );
  }
  ngOnInit(): void {}
}
