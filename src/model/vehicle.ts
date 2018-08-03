export class Vehicle {
  public vehicleId:string;
  public isCarSelected: boolean;
  public isBikeSelected: boolean;
  public isPrimaryVehicle:boolean=false;
  public getIsCarSelected(): boolean {

    return this.isCarSelected;
  }
  public getIsBikeSelected(): boolean {

    return this.isBikeSelected;
  }

  public setIsBikeSelected(IsBikeSelected: boolean): void {

    this.isBikeSelected = IsBikeSelected;
  }
  public setIsCarSelected(isCarSelected: boolean): void {

    this.isCarSelected = isCarSelected;
  }
}