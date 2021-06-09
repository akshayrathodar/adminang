import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  constructor(public router:Router,private fb: FormBuilder,public cs:CommonService) { }

  ngOnInit(): void {
    this.angForm = this.fb.group({
      email: ['', Validators.required,Validators.email],
      password:['',Validators.required]
   });
  }
  

  gotoDash = function () {
     let email = this.angForm.controls.email.value;
     let pass = this.angForm.controls.password.value;
     if(email != '' && pass != '') {
        let fm = new FormData();
        fm.append('email',email);
        fm.append('password',pass);
        fm.append('device_id','iphone 10');
        this.cs.SubmiPostFormData('/api/v1/admin/login',fm).then((response) => {   
          console.log(response);  
        }).catch((error) => {
          console.log(error);
        });
     } else {
      Swal.fire('Required', 'Email And Password are required!', 'error'); 
     }
     //alert(this.angForm.controls.email.value);
     
    //console.log(this.angForm);
    //this.router.navigateByUrl('/dashboard');
  };


}
