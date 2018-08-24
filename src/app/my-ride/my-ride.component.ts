
import { OfferRide } from '../../model/offerride';
import { Ride } from '../../model/ride';
import { TakeRide } from '../../model/takeride';
import { User } from '../../model/user';
import { DataService } from '../service/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-ride',
  templateUrl: './my-ride.component.html',
  styleUrls: ['./my-ride.component.css']
})
export class MyRideComponent implements OnInit {
   panelOpenState=false;
private user:User=null;
  public ridelist:Ride[];
 
  constructor(private dataService:DataService,private route:ActivatedRoute) { }

  ngOnInit() {
   //this.route.data.subscribe((data: { user: User })=>{this.user=data.user})
   //this.dataService.updateUser(this.user);
        this.dataService.currentUser.subscribe(user => this.user = user);
 
    if((this.user).allRides.length>0){
     this.ridelist=this.user.allRides;

    }
    else{
   this. ridelist=[];
    }
 
  }

}
