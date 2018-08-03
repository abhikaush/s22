import { LocationAddress } from '../../model/locationAddress';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Address } from './objects/address';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
//declare function getdistance(slat,slng,elat,elng): any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public locAdd:LocationAddress;
  //maps geolocation\
 
  public  lt=0;
  public  lg=0;
  

 
  //vehicle
  
  

  
  
startFlag:boolean =true;
constructor() {
  this.locAdd = new LocationAddress();
 
   
  
  
  }
point1:string='';
  
  
  
  
  
  ngOnInit() {
     
  }

  
  
   @ViewChild("placesRef") placesRef : GooglePlaceDirective;
  
  
  
//lat:number=18.578262;
//  lng:number=73.685914;
// 
//  dlat: number = 0;
//  dlng: number = 0;

  travelMode : string='DRIVING';
  
   public renderOptions: any = {
    draggable: true,
    suppressMarkers: true,
    suppressInfoWindows: false,
    markerOptions: { // effect all markers
     //   icon: '../icon.png',
    },
}
  public setPanel() {
    return document.querySelector('#myPanel');
}
  
  
  

public markerOptions = {
    origin: {
        infoWindow: 'This is origin.',
       // icon: '../icon.png',
        draggable: false,
    },
    destination: {
      //  icon: '../icon.png',
        label: 'marker label',
        opacity: 0.8,
    },
}
  
  
  //test
           el:number = 0;
//        public handleAddressChange(address: Address) {
//        // Do some stuff
// 
//          if (this.point1 == 'start') {
// 
//     this.lat=  address.geometry.location.lat();
//            this.lng=  address.geometry.location.lng();
//          alert(JSON.stringify(address));
//            console.log(JSON.stringify(address));
//            this.start = address.formatted_address;
//          }
//         else if (this.point1 == 'end'){
//            this.dlat=  address.geometry.location.lat();
//            this.dlng=  address.geometry.location.lng();
//this.end=address.formatted_address;
//           
//          }if(this.dlat!=0){
//            this.getDirection(this.lat,this.lng,this.dlat,this.dlng);
//         //   getdistance(this.lat,this.lng,this.dlat,this.dlng);
//          }
//          
//         
//    }
//  
//  markerchange(event:any){
//  
//  this.lat=event.coords.lat;
//    this.lng=event.coords.lng
//    alert(this.lat);
//      this.getDirection(this.lat,this.lng,this.dlat,this.dlng);
//  
//  }
  
  
  
//  mapclick(event){
//   if (this.point1 == 'start') {
//           
//     this.lat=  event.coords.lat;
//            this.lng=  event.coords.lng;
//
//         //   this.start = address.formatted_address;
//          }
//         else if (this.point1 == 'end'){
//            this.dlat=  event.coords.lat;
//            this.dlng=  event.coords.lng;
////this.end=address.formatted_address;
//           
//          }if(this.dlat!=0){
//            this.getDirection(this.lat,this.lng,this.dlat,this.dlng);
//          //  getdistance(this.lat,this.lng,this.dlat,this.dlng);
//          }
//          
//  
//  }
//  
  //date picker
   //model: NgbDateStruct;

//  isWeekend(date: NgbDateStruct) {
//    const d = new Date(date.year, date.month - 1, date.day);
//    return d.getDay() === 0 || d.getDay() === 6;
//  }
//
//  isDisabled(date: NgbDateStruct, current: {month: number}) {
//    return date.month !== current.month;
//  }
//  //date picker
//  
//  
//  //time picker
//   time = {hour: 13, minute: 30};
//  meridian = true;
//
//  toggleMeridian() {
//      this.meridian = !this.meridian;
//  }
//   getDirection(a, b,c, d) {
//    
//  alert(a+" "+b+" "+c+" "+d);
//    this.origin = {lat:a, lng:b}
//  this.destination = { lat: c, lng: d}
//
//  // this.origin = 'Taipei Main Station'
//  // this.destination = 'Taiwan Presidential Office'
//}

  
}
