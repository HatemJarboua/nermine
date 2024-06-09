import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { user } from '../models/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm =  new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl(  '',[ Validators.required,Validators.minLength(6),
       Validators.maxLength(40)
    ])
})
// validation
  get f(){

    return this.registerForm.controls;

  }
user : user ={
 firstName:'',
  lastName:'',
  email:'',
  password:'',
  visitor:'',

}
message='';
  constructor(private  authService :AuthService, private toastr: ToastrService, ) { }

  ngOnInit(): void {
  }

 register(){
    const data = {
      firstName: this.user.firstName,
      lastName:this.user.lastName,
      email:this.user.email,
      password:this.user.password,
      visitor:this.user.visitor,

    };
    this.authService.register(data).subscribe(
     (response:any)  => {
        console.log(response);
        console.log(response.message);
        
        this.toastr.success(response.message);

        

      },
     (error:any)  => {
        console.log(error);
        console.log(error.message)
        this.toastr.error(error);

        
      });
    

  }

 

}
