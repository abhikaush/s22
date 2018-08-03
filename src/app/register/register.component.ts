import {User} from '../../model/user';
import {RegistrationService} from '../service/registration.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegistrationService) {}

  public user: User = new User();
  ngOnInit() {

  }
  userRegistration(): void {
    this.registerService.registerUser(this.user).subscribe();
  }
}
