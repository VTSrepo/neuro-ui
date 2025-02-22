import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetProfile } from '../shared/enums/getProfile';
// import { Config } from '../config/app.config';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(public http: HttpClient) {}

  public getEvents(): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.localUrl + 'events', { headers: headers });
  }

  public saveEvent(event: any): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.localUrl + 'event', event, {
      headers: headers,
    });
  }
}
