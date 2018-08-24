
import {TakeRide} from '../../model/takeride';
import { User } from '../../model/user';
import {Vehicle} from '../../model/vehicle';
import {HomeFormComponent} from '../home-form/home-form.component';
import { DataService } from '../service/data.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-vehicle',
  templateUrl: './my-vehicle.component.html',
  styleUrls: ['./my-vehicle.component.css']
})
export class MyVehicleComponent implements OnInit {
Vehi:Vehicle[];
  private user:User=null;
  constructor(private dataService:DataService) {}

  ngOnInit() {
            this.dataService.currentUser.subscribe(user => this.user = user);
   
    if(this.user.vehicleList.length>0){
    this.Vehi=this.user.vehicleList;
    }
    else{
    this.Vehi=[];
    }
   
  }

  
  
 public slider(i:number):void{

    let length =this.Vehi.length;
   
    if(!this.Vehi[i].isPrimaryVehicle)
      {
     
    for(let j:number=0;j<length;j++)
      {
      
    if(j!=i)
      {
       
    this.Vehi[j].isPrimaryVehicle=false;
    }
    
    }
    }
  }
}
