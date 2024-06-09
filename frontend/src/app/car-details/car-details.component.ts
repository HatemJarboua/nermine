import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { HttpClient } from "@angular/common/http";
import{car} from'../models/car.model';
import { Router ,ActivatedRoute } from '@angular/router';
import {environment} from '../../environments/environment';




@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  imagesURL = environment.imagesLink;

  car:car ={
    mark:'',
    price:'',
    imm:'',
    description:'',
    location:'',
    imageCar:'',
  
   
   }
  constructor(private carService:CarService,private httpClient: HttpClient, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getCar(this.route.snapshot.params['_id']);
  }
  getCar(_id: any): void {
    this.carService.getCar(_id)
      .subscribe(
       (data:any) => {
          this.car = data.data;
          console.log(data.data);
        },
        error => {
          console.log(error);
        });
  }
}
