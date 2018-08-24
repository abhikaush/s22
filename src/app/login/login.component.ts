
import {cacheMemory} from '../../model/constant';
import {User} from '../../model/user';

import {appUsersAuth} from '../security/app-users-auth';
import {DataService} from '../service/data.service';
import {LoginSecurityService} from '../service/login-security.service';
import {UserService} from '../service/user.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {observable} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private retryCounter: number = 0;
  user: User = new User();
  securityObject: appUsersAuth = null;
  returnUrl: string;
  commonUrl: string;
  constructor(private dataService: DataService, private loginservice: LoginSecurityService,
    private route: ActivatedRoute, private router: Router, private location: Location, private userservice: UserService) {}

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
    this.dataService.currentUser.subscribe(user => this.user = user);
  }
  login() {

    this.loginservice.login(this.user).subscribe(resp => {

      this.securityObject = resp;
      if (this.securityObject.isAuthinticated) {
        cacheMemory.set("loginId", this.securityObject.userName);
       // this.getUser(this.securityObject.userName);
      }
      if (this.returnUrl) {

        this.router.navigateByUrl(this.returnUrl);
      }
      else if (this.securityObject.isAuthinticated) {
        this.location.back();
      }
    });

  }

//  public getUser(UserId: string) {
//    this.userservice.getUserDetails(UserId).subscribe(user => {
//
//      this.user = user;
//      alert(JSON.stringify(this.user));
//      if (undefined != this.user) {
//
//        cacheMemory.set("userDetails", this.user);
//        alert(JSON.stringify(<User>cacheMemory.get("userDetails")));
//      }
//      else {
//        ++this.retryCounter;
//        //retry 5 times
//        console.log("retry to fetch user " + this.retryCounter);
//        if (this.retryCounter < 5) {
//          this.getUser(UserId);
//        }
//        else {
//          alert("unable to fetch user details");
//          this.user = new User();
//          cacheMemory.set("userDetails", new User());
//        }
//      }
//      this.dataService.updateUser(this.user);
//      alert(JSON.stringify(this.user));
//    });
//
//
//
//  }
}
