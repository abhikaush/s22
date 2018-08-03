
import {Bike} from '../../model/bike';
import {OfferRide} from '../../model/offerride';
import {User} from '../../model/user';
import {Vehicle} from '../../model/vehicle';
import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    let vehiclev: Bike = new Bike();


    vehiclev.setCategory("car");
    vehiclev.setIsCarSelected(false);
    vehiclev.setIsBikeSelected(true);
    vehiclev.setFarePerKm(3);
    vehiclev.setHelmate(true);
    vehiclev.setOfferingSeats(3);
    vehiclev.setRegNo("3747jjf");


    let offer: OfferRide = new OfferRide();
    offer.setIsOfferRide(false);
    offer.setIsTakeRide(true);
    offer.setIsVehicleAdded(true);
    offer.setVehicleList(vehiclev);
    let u = new User();
    u.companyName = "adf";
    u.userEmail = "adf";
    u.vehicleList = offer.vehicleList;
    u.userRide = offer;
    //const user=u;
    //return {user};
    const ride = offer
    return {ride};
  }

  createDB(){
  
  
  
  
  }
  
}