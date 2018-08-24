import {Ride} from './ride';
import { User } from './user';
export class TakeRide extends Ride {

  public numberOfSeats: number;
  public user:User=new User();

  constructor() {
   super();
   super.setIsOfferRide(false);
    super.setIsTakeRide(true);
    super.setIsRideType("take");
    
  }
  public getNumberOfSeats(): number {

    return this.numberOfSeats;
  }

  public setNumberOfSeats(numberOfSeats: number) {

    this.numberOfSeats = numberOfSeats;
  }
}