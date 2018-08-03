import {Ride} from './ride';
export class TakeRide extends Ride {

  public numberOfSeats: number;

  public getNumberOfSeats(): number {

    return this.numberOfSeats;
  }

  public setNumberOfSeats(numberOfSeats: number) {

    this.numberOfSeats = numberOfSeats;
  }
}