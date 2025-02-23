import { Component, OnInit, signal } from '@angular/core';
import { LoginApiService } from '../login/login.service';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [],
})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;
  showHeader = true;
  loggedIn = false; 
  isAdmin = false;
  constructor(
    private as: AppService,
    private loginService: LoginApiService,
    private router: Router,
    private auth: AuthService
  ) {
    this.as.loginObs.subscribe((data) => {
      this.loggedIn = data;
    });
  }
  ngOnInit() {
    this.auth.isAdmin$.subscribe(isAdmin =>{
      this.isAdmin =isAdmin;
    });
  }

  logout() {   
    this.loggedIn = false;
    this.auth.logout();
    this.as.setLogin(false);
    this.router.navigate(['/login']);
  }
}
