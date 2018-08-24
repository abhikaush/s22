import {OfferRide} from '../../model/offerride';
import {Ride} from '../../model/ride';
import {TakeRide} from '../../model/takeride';
import {SearchRideService} from '../service/search-ride.service';
import {Component, OnInit, Injectable} from '@angular/core';


@Component({
  selector: 'app-find-ride',
  templateUrl: './find-ride.component.html',
  styleUrls: ['./find-ride.component.css']
})
export class FindRideComponent implements OnInit {

  private rideList: OfferRide[] = [];
  constructor(private searchService: SearchRideService) {


  }

  takeRide(ride: TakeRide) {
    this.searchService.searchRide(ride).subscribe(rideList => this.rideList = rideList);

  }



  ngOnInit() {
  }

}
