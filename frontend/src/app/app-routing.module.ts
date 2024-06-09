import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdministratorInterfaceComponent } from './dashboardAdmin/administrator-interface/administrator-interface.component';
import { RegisterComponent } from './register/register.component';
import { CarListComponent } from './car-list/car-list.component';
import { AddcarComponent } from './addcar/addcar.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { UpdateComponent } from './update/update.component';
import { UpdateAccessComponent } from './dashboardAdmin/update-access/update-access.component';
import { CarsCardComponent } from './cars-card/cars-card.component';
import { ReservationComponent } from './reservation/reservation.component';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';

const routes: Routes = [
  {path:"",
  component:HomeComponent} ,
  {
    path:"login",
    component:LoginComponent
  },
  {path:"AdministratorInterface",
  component:AdministratorInterfaceComponent,

},
{
  path:"updateAccess/:_id",
  component:UpdateAccessComponent
},
{path:"AdministratorInterface",
component:AdministratorInterfaceComponent,


},
{
  path:"CarList",
  component:CarListComponent,
},
{
  path:"cars",
  component:CarsCardComponent
},
{ path: 'Addcar',
component: AddcarComponent,
},
{
  path:"update/:_id",
  component:UpdateComponent,

  
},
{ path: 'details/:_id',
component:CarDetailsComponent,
},
{ path: 'reserve/:_id', component: ReservationComponent },
{ path: 'user-reservations', component: UserReservationsComponent},
{
  path:"register",
  component:RegisterComponent
},]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
