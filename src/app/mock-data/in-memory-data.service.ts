
import {Bike} from '../../model/bike';
import {Car} from '../../model/car';
import { LocationAddress } from '../../model/locationAddress';
import {OfferRide} from '../../model/offerride';
import {Ride} from '../../model/ride';
import {TakeRide} from '../../model/takeride';
import {User} from '../../model/user';
import {Vehicle} from '../../model/vehicle';
import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let car: Car = new Car();
    car.isPrimaryVehicle = false;
    car.category = "Verna";
    car.carType = "Sedan";
    car.farePerKm = 5;
    car.features = "Music System";
    car.isCarSelected = true;
    car.isBikeSelected = false;
    car.offeringSeats = 4;
    car.regNo = "MH14 GE 8636";


    let vehiclev: Bike = new Bike();
 
 let ul:User[]=[];
         let ride: Ride[] = [];
 let take1: TakeRide = new TakeRide();
    let offer1: OfferRide = new OfferRide();
    
    vehiclev.isPrimaryVehicle = true;
    vehiclev.setCategory("Bajaj Pulsar");
    vehiclev.setIsCarSelected(false);
    vehiclev.setIsBikeSelected(true);
    vehiclev.setFarePerKm(3);
    vehiclev.setHelmate(true);
    vehiclev.setOfferingSeats(3);
    vehiclev.setRegNo("MH14GE 8636");

    let vehicle: Vehicle[] = [];
    vehicle.push(car);
    vehicle.push(vehiclev);
let offer4:OfferRide=new OfferRide();
let take: TakeRide = new TakeRide();
    let offer: OfferRide = new OfferRide();
   let start :LocationAddress=new LocationAddress();
    start.latitude=18.5946784;
    start.longitude=73.70953650000001;
    start.formattedAddress="Hinjewadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Maharashtra, India";
       let end :LocationAddress=new LocationAddress();
    end.latitude=18.5988079;
    end.longitude=73.72881310000002;
    end.formattedAddress="Hinjewadi - Kasarsai Rd, Phase 1, Hinjewadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Maharashtra, India";
    offer.setIsOfferRide(true);
    offer.setIsTakeRide(false);
    offer.isRideType = "offer";
    offer.setIsVehicleAdded(true);
offer.startRide=start;
    offer.endRide=end;
    offer.vehicleList = vehicle;

    
     let u1 = new User();
      let u2 = new User();
      let u3= new User();


    let u = new User();
    
    u.allRides = ride;
    u.userId = "abhishek";
    u.userName = "abhi";
    u.companyName = "Infy";
    u.userEmail = "abhi@gmail.com";
    u.vehicleList = vehicle;
    u.userRide = offer1;
    
    

    
    // u1.allRides = ride;
    u1.userId = "abhishek";
    u1.userName = "abhi";
    u1.companyName = "Infy";
    u1.userEmail = "abhi@gmail.com";
    u1.vehicleList = vehicle;
    u1.userRide = offer4;
    
   // u2.allRides = ride;
    u2.userId = "abhishek";
    u2.userName = "abhi";
    u2.companyName = "Infy";
    u2.userEmail = "abhi@gmail.com";
    u2.vehicleList = vehicle;
    u2.userRide = offer4;
    
   // u3.allRides = ride;
    u3.userId = "abhishek";
    u3.userName = "abhi";
    u3.companyName = "Infy";
    u3.userEmail = "abhi@gmail.com";
    u3.vehicleList = vehicle;
    u3.userRide = offer4;
    

    ul.push(u1);
    ul.push(u2);
 offer.user=ul;
 //   offer1.user=ul;
    
    u.homeAddress=start;
    u.officeAdderss=end;
    u.isUserHomeaddressFilled=true;
    u.isUserOfficeaddressFilled=true;
    
    
    take.setIsOfferRide(false);
    take.setIsTakeRide(true);
    take.isRideType = "Take";
    take.numberOfSeats = 2;
    take.startRide=start;
    take.endRide=end;
   // take.user=u;

    offer1.setIsOfferRide(true);
    offer1.setIsTakeRide(false);
    offer1.isRideType = "offer";
    offer1.setIsVehicleAdded(true);
    offer1.isVehicleAdded = true;
    offer1.vehicleList = vehicle;
offer1.startRide=start;
    offer1.endRide=end;
    
    
  
    
    offer4.setIsOfferRide(true);
    offer4.setIsTakeRide(false);
    offer4.isRideType = "offer";
    offer4.setIsVehicleAdded(true);
    offer4.isVehicleAdded = true;
    offer4.vehicleList = vehicle;
offer4.startRide=start;
    offer4.endRide=end;
    
   
    take1.setIsOfferRide(false);
    take1.setIsTakeRide(true);
    take1.isRideType = "Take";
    take1.numberOfSeats = 2;
      take1.startRide=start;
    take1.endRide=end;
  take1.user=u3;

   
    ride.push(take);
    ride.push(take1);
    ride.push(offer1);
    ride.push(offer);

      
    
    const user: User = u;

    
    
    
    return {user};
    //const ride = offer
    //return {ride};
  }


}