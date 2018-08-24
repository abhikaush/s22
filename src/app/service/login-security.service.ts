import { cacheMemory } from '../../model/constant';
import { User } from '../../model/user';

import { appUsersAuth } from '../security/app-users-auth';
import { LOGIN_MOCKS } from '../security/mocklogin';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSecurityService {
securityObject:appUsersAuth=new appUsersAuth();
  constructor(private dataService:DataService) { }
  
  login(entity:User):Observable<appUsersAuth>
  {
    
   
  this.resetSecurityObject();
    this.dataService.updateUser(new User());
   if(cacheMemory.get("loginId")!=null)
   cacheMemory.set(<string>cacheMemory.get("loginId"),null);
        cacheMemory.set("loginId",null);//to be put in method
    cacheMemory.set("userDetails",null);//to be put in method
    Object.assign(this.securityObject,
    LOGIN_MOCKS.find(user=>user.userName.toLowerCase()==entity.userName.toLowerCase()
    
  )
    );  
 
    if(this.securityObject.userName!==" ")
      {
localStorage.setItem("bearerToken",this.securityObject.bearerToken);}
    return of<appUsersAuth>(this.securityObject);
  }
  
  
  logout():void
  {
   
      //this.dataService.updateUser(new User());
  this.resetSecurityObject();
      
     cacheMemory.set(<string>cacheMemory.get("loginId"),null);
          cacheMemory.set("loginId",null);//to be put in method
    cacheMemory.set("userDetails",null);//to be put in method
   
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
    
    localStorage.removeItem("bearerToken");
  }
  
}
