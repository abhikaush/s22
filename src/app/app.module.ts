import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AgmCoreModule} from '@agm/core';
import { AppComponent } from './app.component';
import { AgmDirectionModule } from 'agm-direction';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { HomeFormComponent } from './home-form/home-form.component';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './mock-data/in-memory-data.service';
import { HttpClientModule }    from '@angular/common/http';
import { MyRideComponent } from './my-ride/my-ride.component';
import { SettingsComponent } from './settings/settings.component';
import { MyVehicleComponent } from './my-vehicle/my-vehicle.component';
import { MyOffersComponent } from './my-offers/my-offers.component';
import { AppRoutingModule } from './/app-routing.module';
import { RegisterComponent } from './register/register.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { FindRideComponent } from './find-ride/find-ride.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeFormComponent,
    MapComponent,
    NavComponent,
    MyRideComponent,
    SettingsComponent,
    MyVehicleComponent,
    MyOffersComponent,
    RegisterComponent,
    UserDetailsComponent,
    LoginComponent,
    FindRideComponent,
   
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
    apiKey:'AIzaSyDVI-NRQzP9WotO9scEAr8YCKYGplbLUPg'
    }),  AgmDirectionModule.forRoot(),GooglePlaceModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, 
    { dataEncapsulation: false }  
    ), HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
