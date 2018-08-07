import {HomeFormComponent} from './home-form/home-form.component';
import {LoginComponent} from './login/login.component';
import {MyOffersComponent} from './my-offers/my-offers.component';
import {MyRideComponent} from './my-ride/my-ride.component';
import {MyVehicleComponent} from './my-vehicle/my-vehicle.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './security/auth.guard';
import {SettingsComponent} from './settings/settings.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {path: 'myRide', component: MyRideComponent, canActivate: [AuthGuard], data: {claimType: 'canViewRide'}},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeFormComponent},
  {path: 'vehicle', component: MyVehicleComponent, canActivate: [AuthGuard], data: {claimType: 'canViewVehicle'}},
  {path: 'offers', component: MyOffersComponent},
  {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard], data: {claimType: 'canViewSettings'}},
  {path: 'register', component: RegisterComponent},
  {path: 'userDetails', component: UserDetailsComponent, canActivate: [AuthGuard], data: {claimType: 'canViewSettings'}},
  {path: 'login', component: LoginComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {




}
