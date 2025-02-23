import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(public http: HttpClient) {}
  
    public getVideos(): Observable<any> {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this.http.get('/assets/video.json')
      //return this.http.get(environment.localUrl + 'videos', { headers: headers });
    }
}
