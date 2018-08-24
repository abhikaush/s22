

import {LocationAddress} from './locationAddress';
export class Ride {
public rideId:string;
  public isTakeRide: boolean;
  public isOfferRide: boolean;

  public startRide: LocationAddress;

  public endRide: LocationAddress;
  public time: Date=new Date();
  public Day: Date =new Date();
  public isRideType:string;
  constructor() {
  
    this.startRide = new LocationAddress();
    this.endRide = new LocationAddress();
  }
  
  public setIsRideType(RideType:string)
  {
  this.isRideType=RideType;
  }
  
  
  public getIsTakeRide(): boolean {

    return this.isTakeRide;
  }
  public getIsOfferRide(): boolean {

    return this.isOfferRide;
  }
  public getStartRide(): LocationAddress {

    return this.startRide;
  }
  public getEndRide(): LocationAddress {

    return this.endRide;
  }
  public getTime(): Date {

    return this.time;
  }

  public getDay(): Date {

    return this.Day;
  }
  public setIsTakeRide(isTakeRide: boolean): void {

    this.isTakeRide = isTakeRide;
  }
  public setIsOfferRide(isOfferRide: boolean): void {

    this.isOfferRide = isOfferRide;
  }
  public setStartRide(startRide: LocationAddress): void {

    this.startRide = startRide;
  }
  public setEndRide(endRide: LocationAddress): void {

    this.endRide = endRide;
  }
  public setTime(time: Date): void {

    this.time = time;
  }

  public setDay(Day: Date): void {

    this.Day = Day;
  }

}