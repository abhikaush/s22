import { User } from '../../model/user';
import { UserService } from '../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService:UserService) { }
public user:User=new User();
  ngOnInit() {
    
    this.userService.getUserDetails().subscribe(user => {
      this.user = user;
      alert(JSON.stringify(this.user));
    });
alert(JSON.stringify(this.user));
  }
  

}
