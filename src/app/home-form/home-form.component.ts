
import {Bike} from '../../model/bike';
import {Car} from '../../model/car';

import {LocationAddress} from '../../model/locationAddress';
import {OfferRide} from '../../model/offerride';
import {Ride} from '../../model/ride';
import {TakeRide} from '../../model/takeride';
import {User} from '../../model/user';
import {Vehicle} from '../../model/vehicle';
import {FindRideComponent} from '../find-ride/find-ride.component';
import {Hero} from '../hero';
import {MapComponent} from '../map/map.component';
import {Address} from '../map/objects/address';
import { DataService } from '../service/data.service';
import {RideService} from '../service/ride.service';
import {SearchRideService} from '../service/search-ride.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Component, ViewChild, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';


@Component({
  selector: 'app-hero-form',

  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})

export class HomeFormComponent implements OnInit {

  //map veriables
  @ViewChild("placesRef") placesRef: GooglePlaceDirective;
  public locAdd: LocationAddress;
  public startFlag: boolean = true;
  public point1: string = '';
  public origin: {}
  public destination: {}
  public start: string = '';
  public end: string = '';
  private isLoaded:boolean=false;
  //map veriable
  public rideTypeObj: Ride = null;
  private offerRideObj: Ride = null;
 // private selectVehicle: Vehicle;
  private vehicleIsCar: Car = new Car();
  private vehicleIsBike: Bike = new Bike();
  public user: User = null;
  private dataPopulatedIndicator:boolean=false;
  constructor(private rideService: RideService,private dataService:DataService) {


  }
  ngOnInit() {
  
    this.getRideFromServer();

   // this.selectVehicle = new Car();


    this.getge();

  }



  //  populateRideDetails() {
  //
  //    if (cacheMemory.get(this.rideTypeObj.isRideType) == null) {
  //      cacheMemory.set(this.rideTypeObj.isRideType, this.rideTypeObj);
  //
  //    }


  //}
  public getRideFromServer() {
    this.dataService.currentUser.subscribe(user=>this.user=user);
  

    if (this.user.userRide!=null) {
      //    this.rideService.getRide().subscribe(rideTypeObj => {
      //      this.rideTypeObj = rideTypeObj
   //    });
      
      this.dataPopulatedIndicator=true;
      this.rideTypeObj = this.user.userRide;
      if(this.rideTypeObj.isOfferRide)
        {
       this.populateVehicleByType();
      }
   
    }
    else {
 this.dataPopulatedIndicator=false;
    
      this.rideTypeObj = new TakeRide();
       
    }
     
  }

//  public isOfferRide(): boolean {
//
//    return this.rideTypeObj.isOfferRide;
//  }
//
//  public isTakeRide(): boolean {
//
//
//    return this.rideTypeObj.isTakeRide;
//
//
//  }

  public selectRide(): void {


    // this.populateRideDetails();

    if (this.rideTypeObj.isRideType == "take") {
      
      //      if (cacheMemory.get(this.rideTypeObj.isRideType) == null) {
      //        this.rideTypeObj = new TakeRide();
      //      } else {
      //        this.rideTypeObj = <TakeRide>cacheMemory.get(this.rideTypeObj.isRideType);
      //
      //      }
      if (!this.rideTypeObj.isTakeRide) {
        
        
        this.rideTypeObj = new TakeRide();
      }
       if(this.dataPopulatedIndicator && this.user.userRide.isTakeRide){
       this.rideTypeObj=<TakeRide>this.user.userRide;
      }




    } else if (this.rideTypeObj.isRideType == "offer") {
    
      //      if (cacheMemory.get(this.rideTypeObj.isRideType) == null) {
      //        this.rideTypeObj = new OfferRide();
      //
      //      }
      //      else {
      //        this.rideTypeObj = <OfferRide>cacheMemory.get(this.reObj.isRideType);
      //
      //      }
      
      if (!this.rideTypeObj.isOfferRide) {
         this.rideTypeObj=new OfferRide();
        (<OfferRide>this.rideTypeObj).setVehicleList(new Car());
      }
     if(this.dataPopulatedIndicator && this.user.userRide.isOfferRide){
       this.rideTypeObj=<OfferRide>this.user.userRide;
      }
    
      //
      //      if ((<OfferRide>this.rideTypeObj).vehicleList.length > 0)
      //        this.selectVehicle = <Bike>(<OfferRide>this.rideTypeObj).vehicleList[0];

     

    

      //      VehicleListConst.push(((<OfferRide>this.rideTypeObj).vehicleList)[0]);
      //     
      //

    }

  }
  public populateVehicleByType() {
    if ((<OfferRide>this.rideTypeObj).vehicleList.length == 0) {

      this.vehicleIsCar = new Car();
    } else if ((<OfferRide>this.rideTypeObj).vehicleList.length > 0) {

      if ((<OfferRide>this.rideTypeObj).vehicleList.length == 1 && ((<OfferRide>this.rideTypeObj).vehicleList[0].isBikeSelected)) {
        this.vehicleIsBike = <Bike>(<OfferRide>this.rideTypeObj).vehicleList[0];
      //  this.selectVehicle.isBikeSelected = true;//to be changed on basis of primary vehicle or previous ride
     //   this.selectVehicle.isCarSelected = false;//to be changed on basis of primary vehicle or previous ride
       
      } else if ((<OfferRide>this.rideTypeObj).vehicleList.length == 1 && ((<OfferRide>this.rideTypeObj).vehicleList[0].isCarSelected)) {
        this.vehicleIsCar = <Car>(<OfferRide>this.rideTypeObj).vehicleList[0];
      //  this.selectVehicle.isBikeSelected = false;//to be changed on basis of primary vehicle or previous ride
     //   this.selectVehicle.isCarSelected = true;//to be changed on basis of primary vehicleor previous ride
      }
      else {
        for (let i: number = 0; i < (<OfferRide>this.rideTypeObj).vehicleList.length; i++) {

        
          if (((<OfferRide>this.rideTypeObj).vehicleList[i].isCarSelected)) {

            this.vehicleIsCar = <Car>(<OfferRide>this.rideTypeObj).vehicleList[i];
         
            this.vehicleIsCar.isCarSelected=true;
      this.vehicleIsBike.isBikeSelected=false;
           // this.selectVehicle.isBikeSelected = false;//to be changed on basis of primary vehicle or previous ride
         //   this.selectVehicle.isCarSelected = true;//to be changed on basis of primary vehicleor previous ride
          }
          else if (((<OfferRide>this.rideTypeObj).vehicleList[i].isBikeSelected)) {
            this.vehicleIsBike = <Bike>(<OfferRide>this.rideTypeObj).vehicleList[i];
        
            this.vehicleIsCar.isCarSelected=false;
      this.vehicleIsBike.isBikeSelected=true;
        //    this.selectVehicle.isBikeSelected = true;//to be changed on basis of primary vehicle or previous ride
        //    this.selectVehicle.isCarSelected = false;//to be changed on basis of primary vehicleor previous ride
          }

        }
      }
    }
  }
  public onClickVehicle(event: string) {

    if (event == "car") {

      document.getElementById("car").style.backgroundColor = "blue";
      document.getElementById("bike").style.backgroundColor = "";
      this.vehicleIsCar.isCarSelected=true;
      this.vehicleIsBike.isBikeSelected=false;
      //this.selectVehicle.isCarSelected = true;
     // this.selectVehicle.isBikeSelected = false;
    } else if (event == "bike") {

      document.getElementById("car").style.backgroundColor = "";
      document.getElementById("bike").style.backgroundColor = "blue";
      this.vehicleIsCar.isCarSelected=false;
      this.vehicleIsBike.isBikeSelected=true;
     // this.selectVehicle.isCarSelected = false;
      //this.selectVehicle.isBikeSelected = true;

    }
  }


  public addVehicle(): void {

    if (this.vehicleIsBike.isBikeSelected) {
    
      (<OfferRide>this.rideTypeObj).vehicleList.push(<Bike>this.vehicleIsBike);

    } else if (this.vehicleIsCar.isCarSelected) {
  
      (<OfferRide>this.rideTypeObj).vehicleList.push(<Car>this.vehicleIsCar);
    }

  }



  ////////////////////////////////MAPS//////////////////////////////////////////////////////////////////////////////////////////

  public setAddress(Address: LocationAddress) {
    if (this.point1 == 'start') {
      this.rideTypeObj.startRide = Address;
      this.start = Address.formattedAddress;

    }
    else if (this.point1 == 'end') {
      this.rideTypeObj.endRide = Address;
      this.end = Address.formattedAddress;
    }
    if (this.rideTypeObj.endRide.latitude != 0) {
      this.getDirection(this.rideTypeObj.startRide.latitude, this.rideTypeObj.startRide.longitude, this.rideTypeObj.endRide.latitude, this.rideTypeObj.endRide.longitude);

      //   getdistance(this.lat,this.lng,this.dlat,this.dlng);
    }
  }



  public handleAddressChange(address: Address) {
    // Do some stuff
    let locationAddress = new LocationAddress();
 
    if (this.point1 == 'start') {


      this.start = address.formatted_address;

      locationAddress.latitude = address.geometry.location.lat();
      locationAddress.longitude = address.geometry.location.lng();
      locationAddress.formattedAddress = address.formatted_address;
      this.rideTypeObj.startRide = locationAddress;

    }
    else if (this.point1 == 'end') {

      this.end = address.formatted_address;
      locationAddress.latitude = address.geometry.location.lat();
      locationAddress.longitude = address.geometry.location.lng();
      locationAddress.formattedAddress = address.formatted_address;
      this.rideTypeObj.endRide = locationAddress;


    } if (this.rideTypeObj.endRide.latitude != 0) {
      this.getDirection(this.rideTypeObj.startRide.latitude, this.rideTypeObj.startRide.longitude, this.rideTypeObj.endRide.latitude, this.rideTypeObj.endRide.longitude);

      //   getdistance(this.lat,this.lng,this.dlat,this.dlng);
    }

  
  }


  pickLocationOnMapclick(event) {
    if (this.point1 == 'start') {

      this.rideTypeObj.startRide.latitude = event.coords.lat;
      this.rideTypeObj.startRide.longitude = event.coords.lng;

      //   this.start = address.formatted_address;
    }
    else if (this.point1 == 'end') {
      this.rideTypeObj.endRide.latitude = event.coords.lat;
      this.rideTypeObj.endRide.longitude = event.coords.lng;
      //this.end=address.formatted_add      
    } if (this.rideTypeObj.endRide.latitude != 0) {
      this.getDirection(this.rideTypeObj.startRide.latitude, this.rideTypeObj.startRide.longitude, this.rideTypeObj.endRide.latitude, this.rideTypeObj.endRide.longitude);
      //  getdistance(this.lat,this.lng,this.dlat,this.dlng);
    }


  }


  markerchange(event: any) {

    this.rideTypeObj.startRide.latitude = event.coords.lat;
    this.rideTypeObj.startRide.longitude = event.coords.lng
 
    this.getDirection(this.rideTypeObj.startRide.latitude, this.rideTypeObj.startRide.longitude, this.rideTypeObj.endRide.latitude, this.rideTypeObj.endRide.longitude);

  }
  getDirection(startLat, startLng, endLat, endLng) {


    this.origin = {lat: startLat, lng: startLng}
    this.destination = {lat: endLat, lng: endLng}

    // this.origin = 'Taipei Main Station'
    // this.destination = 'Taiwan Presidential Office'
  }

  /////////////////////////////////////////////geolocation//////////////////////////////
  success(pos) {
    let crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

  }

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  getge() {


    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(this.success, this.error, options);
   

  }


  //maps


  ////////////////////////////////////////geolocation/////////////////////////////////////////////////


  /////////////////////////////////////MAPS////////////////////////////////////////////////////////////

  /////////////////////////////////////////////dialog///////////////////////////////////////////////////////

  // openDialog(): void {
  //    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //      width: '250px',
  //     // data: {name: this.name, animal: this.animal}
  //    });
  //  }

  /////////////////////////////////////////////dialog///////////////////////////////////////////////////////





































  point: string = 'start';


  name: string = '';
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], '', '', 'Chuck Overstreet');

  public setPanel() {
    return document.querySelector('#myPanel');
  }

  travelMode: string = 'DRIVING';

  public renderOptions: any = {
    draggable: true,
    suppressMarkers: true,
    suppressInfoWindows: false,
    markerOptions: { // effect all markers
      //   icon: '../icon.png',
    },
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

  onClickMe(event: any) {
    this.point1 = event.target.id;

    this.startFlag = false;

  }

  onClickdiv(event: any) {
    this.startFlag = true;

  }





  bike: Bike = new Bike();

  c: Car = new Car();
  onSave() {

 

    //this.cl;

   

   
  }
  submitted = false;

  onSubmit() {
    this.submitted = true;




  }

  // TODO: Remove this when we're done
  get diagnostic() {return JSON.stringify(this.model);}


  newHero() {
    this.model = new Hero(42, '', '', '', '');
  }

}
