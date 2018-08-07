
import {Bike} from '../../model/bike';
import {Car} from '../../model/car';
import {cacheMemory, VehicleListConst} from '../../model/constant';
import {LocationAddress} from '../../model/locationAddress';
import {OfferRide} from '../../model/offerride';
import {Ride} from '../../model/ride';
import {TakeRide} from '../../model/takeride';
import {Vehicle} from '../../model/vehicle';
import {FindRideComponent} from '../find-ride/find-ride.component';
import {Hero} from '../hero';
import {MapComponent} from '../map/map.component';
import {Address} from '../map/objects/address';
import {RideService} from '../service/ride.service';
import {SearchRideService} from '../service/search-ride.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Component, ViewChild, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-hero-form',

  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})

export class HomeFormComponent extends MapComponent implements OnInit {

  //map veriables
  public origin: {}
  public destination: {}
  public start: string = '';
  public end: string = '';
  //map veriable
  @Input() rideTypeObj: Ride = null;
  private offerRideObj: Ride = null;
  private selectVehicle: Vehicle;
  private vehicleIsCar: Car = new Car();
  private vehicleIsBike: Bike = new Bike();

  constructor(private rideService: RideService, private takerideMethod: FindRideComponent) {
    super();
  }
  ngOnInit() {

    this.selectVehicle = new Car();
    this.rideTypeObj = new OfferRide();
    this.getRideFromServer();
    this.getge();

  }

  takeRide() {
    this.takerideMethod.takeRide(<TakeRide>this.rideTypeObj);
  }

  populateRideDetails() {

    if (cacheMemory.get(this.rideTypeObj.isRideType) == null) {
      cacheMemory.set(this.rideTypeObj.isRideType, this.rideTypeObj);

    }


  }
  public getRideFromServer() {
    alert("reduce this call on route");
    this.rideService.getRide().subscribe(rideTypeObj => {
      this.rideTypeObj = rideTypeObj
    });

  }



  public selectRide(): void {

    this.populateRideDetails();

    if (this.rideTypeObj.isRideType == "take") {
      alert(JSON.stringify(cacheMemory.get("take")));
      if (cacheMemory.get(this.rideTypeObj.isRideType) == null) {
        this.rideTypeObj = new TakeRide();
      }
      else {
        this.rideTypeObj = <TakeRide>cacheMemory.get(this.rideTypeObj.isRideType);

      }
      this.rideTypeObj.isTakeRide = true;
      this.rideTypeObj.isOfferRide = false;
      this.rideTypeObj.isRideType = "take";



    } else if (this.rideTypeObj.isRideType == "offer") {

      if (cacheMemory.get(this.rideTypeObj.isRideType) == null) {
        this.rideTypeObj = new OfferRide();

      }
      else {
        this.rideTypeObj = <OfferRide>cacheMemory.get(this.rideTypeObj.isRideType);

      }
      console.log(JSON.stringify(this.rideTypeObj));
      alert(JSON.stringify(this.rideTypeObj));
      //
      //      if ((<OfferRide>this.rideTypeObj).vehicleList.length > 0)
      //        this.selectVehicle = <Bike>(<OfferRide>this.rideTypeObj).vehicleList[0];

      this.rideTypeObj.isRideType = "offer";
      this.rideTypeObj.isOfferRide = true;
      this.rideTypeObj.isTakeRide = false;
      this.populateVehicleByType();

      VehicleListConst.push(((<OfferRide>this.rideTypeObj).vehicleList)[0]);
      alert(VehicleListConst.length);


    }

  }
  public populateVehicleByType() {
    if ((<OfferRide>this.rideTypeObj).vehicleList.length == 0) {

      this.selectVehicle = new Car();
    } else if ((<OfferRide>this.rideTypeObj).vehicleList.length > 0) {

      if ((<OfferRide>this.rideTypeObj).vehicleList.length == 1 && ((<OfferRide>this.rideTypeObj).vehicleList[0].isBikeSelected)) {
        this.vehicleIsBike = <Bike>(<OfferRide>this.rideTypeObj).vehicleList[0];
        this.selectVehicle.isBikeSelected = true;//to be changed on basis of primary vehicle or previous ride
        this.selectVehicle.isCarSelected = false;//to be changed on basis of primary vehicle or previous ride
        alert("BIke" + JSON.stringify(this.vehicleIsBike));
      } else if ((<OfferRide>this.rideTypeObj).vehicleList.length == 1 && ((<OfferRide>this.rideTypeObj).vehicleList[0].isCarSelected)) {
        this.vehicleIsCar = <Car>(<OfferRide>this.rideTypeObj).vehicleList[0];
        this.selectVehicle.isBikeSelected = false;//to be changed on basis of primary vehicle or previous ride
        this.selectVehicle.isCarSelected = true;//to be changed on basis of primary vehicleor previous ride
      }
      else {
        for (let i: number = 0; i < (<OfferRide>this.rideTypeObj).vehicleList.length; i++) {

          alert("Array" + JSON.stringify((<OfferRide>this.rideTypeObj).vehicleList[i]));
          if (((<OfferRide>this.rideTypeObj).vehicleList[i].isCarSelected)) {

            this.vehicleIsCar = <Car>(<OfferRide>this.rideTypeObj).vehicleList[i];
            alert("CAR ARRAY" + JSON.stringify(this.vehicleIsCar));
            this.selectVehicle.isBikeSelected = false;//to be changed on basis of primary vehicle or previous ride
            this.selectVehicle.isCarSelected = true;//to be changed on basis of primary vehicleor previous ride
          }
          else if (((<OfferRide>this.rideTypeObj).vehicleList[i].isBikeSelected)) {
            this.vehicleIsBike = <Bike>(<OfferRide>this.rideTypeObj).vehicleList[i];
            alert("bike ARRAY" + JSON.stringify(this.vehicleIsBike));
            this.selectVehicle.isBikeSelected = true;//to be changed on basis of primary vehicle or previous ride
            this.selectVehicle.isCarSelected = false;//to be changed on basis of primary vehicleor previous ride
          }

        }
      }
    }
  }
  public onClickVehicle(event) {
    if (event.target.id == "car") {

      document.getElementById("car").style.backgroundColor = "blue";
      document.getElementById("bike").style.backgroundColor = "";
      this.selectVehicle.isCarSelected = true;
      this.selectVehicle.isBikeSelected = false;
    } else if (event.target.id == "bike") {

      document.getElementById("car").style.backgroundColor = "";
      document.getElementById("bike").style.backgroundColor = "blue";
      this.selectVehicle.isCarSelected = false;
      this.selectVehicle.isBikeSelected = true;

    }
  }


  public addVehicle(): void {

    if (this.selectVehicle.isBikeSelected) {
      alert("iscar" + JSON.stringify(this.vehicleIsBike));
      (<OfferRide>this.rideTypeObj).vehicleList.push(<Bike>this.vehicleIsBike);

    } else if (this.selectVehicle.isCarSelected) {
      alert("iscar" + JSON.stringify(this.vehicleIsCar));
      (<OfferRide>this.rideTypeObj).vehicleList.push(<Car>this.vehicleIsCar);
    }

  }



  ////////////////////////////////MAPS//////////////////////////////////////////////////////////////////////////////////////////





  public handleAddressChange(address: Address) {
    // Do some stuff
    let locationAddress = new LocationAddress();
    alert(JSON.stringify(this.rideTypeObj));
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

    alert(JSON.stringify(this.rideTypeObj));
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
    alert(this.rideTypeObj.startRide.latitude);
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
    // alert(JSON.stringify(navigator.geolocation.getCurrentPosition(this.success)));

  }


  //maps


  ////////////////////////////////////////geolocation/////////////////////////////////////////////////


  /////////////////////////////////////MAPS////////////////////////////////////////////////////////////










































  point: string = 'start';


  name: string = '';
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], '', '', 'Chuck Overstreet');

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

    alert(JSON.stringify(new OfferRide()));

    //this.cl;

    alert(JSON.stringify(this.bike));
    alert(JSON.stringify(this.c));

    alert(this.bike.getOfferingSeats());
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
