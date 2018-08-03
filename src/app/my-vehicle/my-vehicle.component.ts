import { cacheMemory, VehicleListConst } from '../../model/constant';
import {TakeRide} from '../../model/takeride';
import {Vehicle} from '../../model/vehicle';
import {HeroFormComponent} from '../hero-form/hero-form.component';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-vehicle',
  templateUrl: './my-vehicle.component.html',
  styleUrls: ['./my-vehicle.component.css']
})
export class MyVehicleComponent implements OnInit {
Vehi:Vehicle[]=null;
  constructor() {}

  ngOnInit() {
    this.Vehi = VehicleListConst;
alert(JSON.stringify(VehicleListConst));
  }

}
