import {appUsersAuth} from '../security/app-users-auth';
import {LoginSecurityService} from '../service/login-security.service';

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  securityObject: appUsersAuth = null;
  constructor(private securityService: LoginSecurityService, private route: Router) {


    this.securityObject = this.securityService.securityObject;
  }

  ngOnInit() {
  }

  logout(): void {

    this.securityService.logout();
    this.route.navigateByUrl("/home");
  }
  login(): void {

    this.route.navigate(['login']);
  }






 
}
