import { LocationAddress } from './locationAddress';
import { OfferRide } from './offerride';
import { Ride } from './ride';
import { Vehicle } from './vehicle';
export class User {
  public userName:string="";
  public userId:string="";
 public userPnoneNumber:number;
  public userEmail:string="";
  public companyName:string="";
  public userPassword:string="";
  public vehicleList:Vehicle[]=[];
  public userRide:Ride=new OfferRide();
  public allRides:Ride[]=[];
  public homeAddress:LocationAddress=null;
  public officeAdderss:LocationAddress=null;
  public isUserHomeaddressFilled:boolean=false;
public isUserOfficeaddressFilled:boolean=false;
}