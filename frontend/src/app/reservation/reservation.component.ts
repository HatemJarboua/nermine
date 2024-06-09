import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../services/reservation.service';
import { car } from '../models/car.model';
import { CarService } from '../services/car.service';
import { reservation } from '../models/reservation.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  _id = this.actRoute.snapshot.params['_id'];

  myForm =  new FormGroup({
    mark: new FormControl('',[Validators.required,Validators.minLength(2)]),
    useradmin:new FormControl('',Validators.required),
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    tel:new FormControl('',Validators.required),
    adresse:new FormControl('',Validators.required),

    dateDebut:new FormControl('',Validators.required),
   dateFin:new FormControl('',Validators.required),


})


car :car ={
 mark:'',
 price:'',
 imm:'',
 location:'',
 description:'',
 user:'',


}
reservation:reservation={
  mark: '',
  useradmin: '',
  firstName: '',
  lastName:'',
  dateDebut: '',
 dateFin: '',
 adresse:'',
 tel:'',
}
message = '';
  constructor(private carService:CarService, private resrvationService:ReservationService,  public actRoute: ActivatedRoute,
    public router: Router,private toastr: ToastrService,
   ) { }

   ngOnInit(): void {
    this.getCar(this.actRoute.snapshot.params['_id']);
  }
  getCar(_id: any): void {
    this.carService.getCar(_id)
      .subscribe(
        (data: any) => {
          this.car = data.data;
          console.log("dataaa :",data.data);
        },
              error => {
            console.log(error);
          });
    }


save(){
  const data={
    mark:this.car.mark,
    useradmin: this.car.user,
    firstName: this.reservation.firstName,
    lastName:this.reservation.lastName,
    dateDebut: this.reservation.dateDebut,
   dateFin: this.reservation.dateFin,
  tel: this.reservation.tel,
  adresse: this.reservation.adresse,


 
    

  }
  this.resrvationService.createReservation(data).subscribe(
    (response:any) => {

      //console.log(data)
    console.log(response.data);
    this.toastr.success(response.message);

    this.router.navigate(['']); 


   


    },
    error => {
      console.log(error);
      this.toastr.error(error.error.message +"!!!!");


    }
  )

}}