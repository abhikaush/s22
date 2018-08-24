import { User } from '../../model/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private user = new BehaviorSubject(new User());
  currentUser=this.user.asObservable();
  constructor() { }
  
  
  
  updateUser(user:User)
  {
 
  this.user.next(user);
    
  }
}
