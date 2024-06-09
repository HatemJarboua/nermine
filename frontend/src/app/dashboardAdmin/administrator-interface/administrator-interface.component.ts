import { Component, OnInit } from '@angular/core';
import{user}from'../../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../services/car.service';

import { AdminService } from '../../services/admin.service';
import { ControlContainer } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { UpdateAccessComponent } from '../update-access/update-access.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-administrator-interface',
  templateUrl: './administrator-interface.component.html',
  styleUrls: ['./administrator-interface.component.css']
})
export class AdministratorInterfaceComponent implements OnInit {
  userList?:user[];
  user:user={
    _id:'',
    firstName:'',
    lastName:'',
    email:'',
    admin:'',
    access:'',
    
  
  }

  constructor(private adminService:AdminService,private route: ActivatedRoute,
    private router: Router,
    private carService:CarService,
    private  dialogRef : MatDialog,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.getUser(this.user._id);
    
    this.adminService.getAll().subscribe(
      (result:any)=>{
       
          this.userList= result.data ;
          console.log(result.data);
          console.log(result.data.admin);

       
      },
      error=>{
        console.log(error);
      }
    )
  }
  delete(_id : String ): void{
    if(window.confirm('Are you sure, you want to delete?')){

    this.adminService.delete(_id).subscribe(
      (res:any)=>{ 
        console.log(_id);
      console.log (res.message);

    this.router.navigate(['/CarList']);

    window.location.reload();
    this.toastr.success("agency deleted with succes");

    })}
  
}
getUser(_id: any): void {
  this.adminService.getUser(localStorage.getItem('userdata'))
    .subscribe(
      (data : any) => {
        this.user = data.data;
        console.log(data.data.access);
      },
      error => {
        console.log(error);
      });
}
logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('userdata');
  this.toastr.success("logout with succes");

  this.router.navigate(['/login']);
}
NOTadmin(){
this.user.admin == true ;
}
openDialog(){
  this.dialogRef.open(UpdateAccessComponent);
}

}
