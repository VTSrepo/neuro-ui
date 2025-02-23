import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos.service';

@Component({
  selector: 'app-manage-videos',
  templateUrl: './manage-videos.component.html',
  styleUrls: ['./manage-videos.component.scss'],
})
export class ManageVideosComponent implements OnInit {
  videos: any = [];

  constructor(private vs: VideosService) {}

  ngOnInit(): void {
    this.vs.getVideos().subscribe((res) => {
      this.videos = res;
    });
  }
}
