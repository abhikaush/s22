
import { cacheMemory } from '../model/constant';
import { User } from '../model/user';
import { DataService } from './service/data.service';
import { UserService } from './service/user.service';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
public user=new User();
  public retryCounter:number=0;
constructor(private userservice: UserService,private dataService:DataService){}
  
  
ngOnInit() {
//   this.dataService.currentUser.subscribe(user => this.user = user);
// if(cacheMemory.get("loginId")!=null){
// 
// if(cacheMemory.get("userDetails")==null)
//   {
//this.getUser(<string>cacheMemory.get("loginId"));
// }
//  
// }
//      cacheMemory.set("loginId",null);//to be put in method
//    cacheMemory.set("userDetails",null);//to be put in method
}

// public getUser(UserId:string){
// 
// this.userservice.getUserDetails(UserId).subscribe(user=>{
//  this.user=user;
//   if (undefined != this.user) {
//        cacheMemory.set("userDetails", this.user);
//      }
//      else {
//        ++this.retryCounter;
//        //retry 5 times
//        console.log("retry to fetch user from app-component " + this.retryCounter);
//        if (this.retryCounter < 5) {
//          this.getUser(UserId);
//        }
//        else {
//          alert("unable to fetch user details");
//          cacheMemory.set("userDetails", new User());
//        }
//      }
//  
//});
//   
//  
// 
// }
//  
}



