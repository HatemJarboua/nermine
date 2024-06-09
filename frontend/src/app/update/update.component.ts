import { Component, OnInit } from '@angular/core';

import { CarService } from '../services/car.service';
import { ToastrService } from 'ngx-toastr';
import{car} from'../models/car.model';
import { FormBuilder ,FormGroup,FormControl,Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  _id = this.actRoute.snapshot.params['_id'];

 

  // myForm: FormGroup;
 

 
   myForm =  new FormGroup({
     mark: new FormControl('',[Validators.required,Validators.minLength(2)]),
     price:new FormControl('',Validators.required),
     imm:new FormControl('',Validators.required),
     description:new FormControl('',Validators.required),
     location:new FormControl('',Validators.required),
 
 
 })
 
 
 car :car ={
  mark:'',
  price:'',
  imm:'',
  location:'',
  description:'',


}
message = '';
  constructor(private carService:CarService,  public actRoute: ActivatedRoute,
    public router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCar(this.actRoute.snapshot.params['_id']);

  

}
getCar(_id: any): void {
  this.carService.getCar(_id)
    .subscribe(
      (data : any) => {
        this.car = data.data;
        console.log(data.data);
      },
            error => {
          console.log(error);
        });
  }
update(id :any) {

  this.message = '';
    this.carService.update(id,this.car).subscribe(
       (response:any) => {
        this.toastr.success(response.message);
        this.router.navigate(['/CarList']);      
    },
    error => {
      console.log(error);
    });
}
}
