import {OfferRide} from './offerride';
import {Vehicle} from './vehicle';

export class Bike extends Vehicle {

  public bikeType: string;
  public regNo: string;
  public farePerKm: number;
  public offeringSeats: number;
  public category: string;
  public Helmate: boolean;

  constructor() {
    super();
    this.isCarSelected=false;
    this.isBikeSelected=true;
  }

  public getBikeType(): string {

    return this.bikeType;
  }
  public getRegNo(): string {

    return this.regNo;
  }
  public getFarePerKm(): number {

    return this.farePerKm;
  }
  public getOfferingSeats(): number {

    return this.offeringSeats;
  }
  public getCategory(): string {

    return this.category;
  }
  public getHelmate(): boolean {

    return this.Helmate;
  }


  public setBikeType(Typeq: string) {

    this.bikeType = Typeq;
  }
  public setRegNo(RegNo: string): void {

    this.regNo = RegNo;
  }
  public setFarePerKm(FarePerKm: number): void {

    this.farePerKm = FarePerKm;
  }
  public setOfferingSeats(OfferingSeats: number): void {

    this.offeringSeats = OfferingSeats;
  }
  public setCategory(Category: string): void {

    this.category = Category;
  }
  public setHelmate(Helmate: boolean): void {

    this.Helmate = Helmate;
  }

}