import { appUser } from '../security/app-user';
import { appUsersAuth } from '../security/app-users-auth';
import { LOGIN_MOCKS } from '../security/mocklogin';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSecurityService {
securityObject:appUsersAuth=new appUsersAuth();
  constructor() { }
  
  login(entity:appUser):Observable<appUsersAuth>
  {
     alert(JSON.stringify(entity.userName))
   
  this.resetSecurityObject();
    Object.assign(this.securityObject,
    LOGIN_MOCKS.find(user=>user.userName.toLowerCase()==entity.userName.toLowerCase()
    
  )
    );  
   alert(JSON.stringify(this.securityObject))
    if(this.securityObject.userName!==" ")
      {
localStorage.setItem("bearerToken",this.securityObject.bearerToken);}
    return of<appUsersAuth>(this.securityObject);
  }
  
  
  logout():void
  {
  this.resetSecurityObject();
  }
  
  resetSecurityObject():void
  {

  this.securityObject.bearerToken="";
    this.securityObject.userName="";
    this.securityObject.isAuthinticated=false;
    this.securityObject.canViewVehicle=false;
 this.securityObject.canViewRide=false;
 this.securityObject.canViewWallet=false;
this.securityObject.canViewSettings=false;
      alert(JSON.stringify(this.securityObject))
    localStorage.removeItem("bearerToken");
  }
  
}
