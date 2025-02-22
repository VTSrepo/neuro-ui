import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private isAdminSubject = new BehaviorSubject(true);
  public isAdmin$ = this.isAdminSubject.asObservable();
  public isAdmin = false;
  
  currenUrl = '';
  previousUrl = '';

  constructor(private appService: AppService) {}

  isAuthenticatedUser(): boolean {
    return !!localStorage.getItem('user') || this.isAuthenticated;
  }

  login(userRes: any) {
    localStorage.setItem('user', JSON.stringify(userRes));
    this.isAuthenticated = true;    
    this.appService.setLogin(true);
    if (JSON.parse(localStorage.getItem('user') || '{}').user_status === 'A') {
      this.isAdminSubject.next(true);
    } else {
      this.isAdminSubject.next(false);
    }
  }

  logout(): void {
    localStorage.removeItem('user');
    this.isAuthenticated = false;
    this.isAdminSubject.next(false);
    this.appService.setLogin(false);
  }
}
