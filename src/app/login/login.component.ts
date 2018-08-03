import {appUser} from '../security/app-user';
import {appUsersAuth} from '../security/app-users-auth';
import {LoginSecurityService} from '../service/login-security.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: appUser = new appUser();
  securityObject: appUsersAuth = null;
  returnUrl: string;
  commonUrl: string;
  constructor(private loginservice: LoginSecurityService,
    private route: ActivatedRoute, private router: Router, private location: Location) {}

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
  }
  login() {

    this.loginservice.login(this.user).subscribe(resp => {
    this.securityObject = resp;
      if (this.returnUrl) {
        this.router.navigateByUrl(this.returnUrl);
      }
      else {
        this.location.back();
      }
    });

  }
}
