import { Component, OnInit } from '@angular/core';
import{car} from'../models/car.model';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

import { ActivatedRoute, Router } from '@angular/router';
import{user}from'../models/user.model';
import { CarService } from '../services/car.service';
import {environment} from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
carList?:car[];
imagesURL = environment.imagesLink;


user:user={
  _id:'',
  firstName:'',
  lastName:'',
  email:'',
  

}


  constructor( private carService:CarService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer:DomSanitizer,private toastr: ToastrService,) { }


  ngOnInit(): void {
   this.getUser(this.user._id);
    console.log(this.user._id);

    this.carService.getAll().subscribe(
      (result:any)=>{
        this.carList= result.data ;
        console.log(this.carList);
      },
      error=>{
        console.log(error);
      }
    )
  }
  getUser(_id: any): void {
    this.carService.getUser(localStorage.getItem('userdata'))
      .subscribe(
        (data : any) => {
          this.user = data.data;
          console.log(data.data.firstName);
        },
        error => {
          console.log(error);
        });
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userdata');

    this.router.navigate(['/login']);
    this.toastr.success("lougout with success");
  }

  delete(_id : String ): void{
    if(window.confirm('Are you sure, you want to delete?')){
    this.carService.delete(_id).subscribe(
      (res:any)=>{ 
        console.log(_id);
       console.log(res.message);
    this.router.navigate(['/CarList']);
    window.location.reload();
    })
  }
}
sanitize(url:string) :SafeUrl{
  return this.sanitizer.bypassSecurityTrustUrl(url);
}
}
    


