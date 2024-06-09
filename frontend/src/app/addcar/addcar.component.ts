import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { CarService } from '../services/car.service';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

import{car} from'../models/car.model';
import { FormBuilder ,FormGroup,FormControl,Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

const URL = 'http://localhost:3000/api/car';


@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {
  
  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'myFile',
    authToken:`Bearer ${localStorage.getItem('token')}`
  });

 
   myForm =  new FormGroup({
     mark: new FormControl('',[Validators.required,Validators.minLength(2)]),
     price:new FormControl('',Validators.required),
     imm:new FormControl('',Validators.required),
     description:new FormControl('',Validators.required),
     location:new FormControl('',Validators.required),
     image: new FormControl('', [Validators.required]),
 
 
 })
 
 
 
 
 
 
 
 
   
  constructor(private carService:CarService,private httpClient: HttpClient, public actRoute: ActivatedRoute,
    public router: Router,private toastr: ToastrService,
 ) {
     }
 
  ngOnInit(): void {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.myForm.patchValue({
        image:item.file.name
      })
    };
    this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
      console.log( {fileItem});
      console.log( {form});
      form.append('mark', this.myForm.get('mark')?.value); //note comma separating key and value
      form.append('price', this.myForm.get('price')?.value); 
      form.append('imm', this.myForm.get('imm')?.value); 
      form.append('description', this.myForm.get('description')?.value); 
      form.append('location', this.myForm.get('location')?.value); 
      form.append('image', this.myForm.get('image')?.value); 

     
      console.log('File successfully uploaded!');
      this.toastr.success("car added with success")


    };

  
  
 
  
  }
 saveUser(){
 

   console.log(this.myForm.value);
   this.httpClient.post('http://localhost:3000/api/car', this.myForm.value)
     .subscribe(
       (response:any) => {
       alert(response.message);
       this.toastr.success("car added with success")
         this.router.navigate(['/CarList']); 
     })
 }

 }
