import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { HttpClientModule ,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AdministratorInterfaceComponent } from './dashboardAdmin/administrator-interface/administrator-interface.component';
import { CarListComponent } from './car-list/car-list.component';
import { FileUploadModule } from 'ng2-file-upload';
import { AddcarComponent } from './addcar/addcar.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { UpdateComponent } from './update/update.component';
import { UpdateAccessComponent } from './dashboardAdmin/update-access/update-access.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';

import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarsCardComponent } from './cars-card/cars-card.component';
import { ReservationComponent } from './reservation/reservation.component';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';
import { LoginVisitorComponent } from './login-visitor/login-visitor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AdministratorInterfaceComponent,
    CarListComponent,
    AddcarComponent,
    CarDetailsComponent,
    UpdateComponent,
    UpdateAccessComponent,
    CarsCardComponent,
    ReservationComponent,
    UserReservationsComponent,
    LoginVisitorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FileUploadModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    ToastNoAnimationModule.forRoot(),




  ],
  providers: [ {
    provide :HTTP_INTERCEPTORS ,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
