import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  registerForm =  new FormGroup({
  
    email:new FormControl(),
    password:new FormControl()
})
user : user ={
  email:'',
  password:'',

}
constructor(private  authService :AuthService , private route: ActivatedRoute,
  private router: Router ,private toastr: ToastrService,
) { }

ngOnInit(): void {
}

login(){
  const data = {
   
    email:this.user.email,
    password:this.user.password,

  };
  this.authService.login(data).subscribe(
    response => {
      console.log(response.data.admin);
      let token = response.data.token ;
      localStorage.setItem("token",token);
      let userdata=response.data._id;
      localStorage.setItem("userdata",userdata);
      console.log(userdata);
           this.router.navigate(['/CarList']);

           if(response.data.admin==true){
            let token = response.data.token ;
            localStorage.setItem("token",token);
            this.router.navigate(['/AdministratorInterface']);
           }
           
          console.log(response.message);
          this.toastr.success(response.message);


    },
    error => {
      console.log(error.error.message);
      this.toastr.error(error.error.message +"!!!!");

     console.log("EMAIL OR PASSWORD INCORRECT !!");

    });
  

}

 
  
}
