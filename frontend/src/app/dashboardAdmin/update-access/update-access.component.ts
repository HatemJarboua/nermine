import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup,FormControl,Validators } from '@angular/forms';
import {user}from'../../models/user.model';
import { AdminService } from "../../services/admin.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-access',
  templateUrl: './update-access.component.html',
  styleUrls: ['./update-access.component.css']
})
export class UpdateAccessComponent implements OnInit {

  _id = this.actRoute.snapshot.params['_id'];
  selectedValue!: string ;

  myForm =  new FormGroup({
 access: new FormControl('',[Validators.required,]),
  



})
user:user ={
  _id:'',
  firstName:'',
  lastName:'',
  email:'',
  admin:'',
  access:'',

}
get f(){

  return this.myForm.controls;

}

  constructor(private adminService:AdminService,public actRoute: ActivatedRoute,
    public router: Router,private  dialogRef : MatDialog , private route: ActivatedRoute, ) { }
    
  ngOnInit(): void {
    this.getUser(this.actRoute.snapshot.params['_id']);

  }
  getUser(_id: any): void {
    this.adminService.getUser(_id)
      .subscribe(
        (data : any) => {
          this.user = data.data;
          console.log(data.data);
        },
              error => {
            console.log(error);
          });
    }

    update(id :any) {
    
      
      this.adminService.update(id,this.user).subscribe(
         (response:any) => {
          this.router.navigate(['/AdministratorInterface']); 
         console.log(' Account updated  with Success');
     
      },
      error => {
        console.log(error);

      });
  }
  
}
