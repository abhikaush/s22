import { Ride } from './ride';
import { Vehicle } from './vehicle';
export class User {
  public userName:string;
  public userId:string;
 public userPnoneNumber:number;
  public userEmail:string;
  public companyName:string;
  public userPassword:string;
  public vehicleList:Vehicle[]=[];
  public userRide:Ride;
  
}