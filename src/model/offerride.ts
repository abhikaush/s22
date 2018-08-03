

import {Bike} from './bike';
import {Car} from './car';
import {Ride} from './ride';
import {Vehicle} from './vehicle';
export class OfferRide extends Ride {

 public  isVehicleAdded: boolean;
 public vehicleList: Array<Vehicle>;
  constructor() {
    super();
   
    this.vehicleList = new Array();
  }
  public getIsVehicleAdded(): boolean {
    return this.isVehicleAdded;
  }
  public getVehicleList(): Array<Vehicle> {
    return this.vehicleList;
  }


  public setIsVehicleAdded(isVehicleAdded: boolean): void {
    this.isVehicleAdded = isVehicleAdded;
  }
  public setVehicleList(vehicle: Vehicle): void {
    this.vehicleList.push(vehicle);
  }
}