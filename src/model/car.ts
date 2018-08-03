import {OfferRide} from './offerride';
import {Vehicle} from './vehicle';

export class Car extends Vehicle {

  public carType: string;
  public regNo: string;
  public farePerKm: number;
  public offeringSeats: number;
  public category: string;
  public features: string;

  constructor() {
   
    super();
    this.isCarSelected=true;
    this.isBikeSelected=false;
  }
  public getCarType(): string {

    return this.carType;
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
  public getFeatures(): string {

    return this.features;
  }


  public setCarType(Typeq: string) {

    this.carType = Typeq;
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
  public setFeatures(Features: string): void {

    this.features = Features;
  }


}