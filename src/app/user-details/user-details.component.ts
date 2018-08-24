
import { LocationAddress } from '../../model/locationAddress';
import { User } from '../../model/user';
import { Address } from '../map/objects/address';
import { DataService } from '../service/data.service';
import { UserService } from '../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 panelOpenState=false;
  public startFlag:boolean=true;
  private buttonType:string="";
  
  constructor(private userService:UserService,private dataService:DataService) { }
private user:User=null;
  ngOnInit() {
    
//    this.userService.getUserDetails().subscribe(user => {
//      this.user = user;
//      alert(JSON.stringify(this.user));
//      if(undefined==this.user)
//        {
//this.user=new User();      }
//      alert(JSON.stringify(this.user));
//    });
//alert(JSON.stringify(this.user));
    this.dataService.currentUser.subscribe(user => this.user = user);
    
  }
  

   public handleAddressChange(address: Address) {
    // Do some stuff
    let locationAddress = new LocationAddress();
   
      locationAddress.latitude = address.geometry.location.lat();
      locationAddress.longitude = address.geometry.location.lng();
      locationAddress.formattedAddress = address.formatted_address;
  if(this.buttonType=='home'){
    
  
  this.user.homeAddress=locationAddress;
     this.user.isUserHomeaddressFilled=true;
//    userDetails.homeAddress=locationAddress;
//  userDetails.isUserHomeaddressFilled=true;
//    
     }
     else if(this.buttonType=='office')
    {
     this.user.officeAdderss=locationAddress;
    this.user.isUserOfficeaddressFilled=true;
//    userDetails.officeAdderss=locationAddress;
//    userDetails.isUserOfficeaddressFilled=true;
  }
this.dataService.updateUser(this.user);
    }
     
     
     
//      pickLocationOnMapclick(event) {
//  
//
//      this.rideTypeObj.startRide.latitude = event.coords.lat;
//      this.rideTypeObj.startRide.longitude = event.coords.lng;
//
//      //   this.start = address.formatted_address;
//    }
       
       
        onClickMe(event: string) {
  
this.buttonType=event;
        
    this.startFlag = false;

  }

  onClickdiv(event: any) {
    this.startFlag = true;

  }

       
  
  
}
