import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { register } from '../register/register';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ActivateService {
  constructor(private http: HttpClient) {}

  public saveEvent(event: any): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.localUrl + 'activate', event, {
      headers: headers,
    });
  }
}
