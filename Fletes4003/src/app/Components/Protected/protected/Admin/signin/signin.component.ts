import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  userstatus: boolean;
  
  registerform: FormGroup = this.fb.group({
    email      : ['',[Validators.required]],
    username   : ['',[Validators.required]],
    rfc        : ['',[Validators.required]],
    password   : ['',[Validators.required]],
    type       : ['user'],
    userdata   : ['true']
  });


  constructor( private fb: FormBuilder,
               private admin: AdminService,
               private router: Router,
               private users: UsersService) { }

  ngOnInit(): void {
    
    this.users.validate().subscribe(resp => {
      this.userstatus = resp['validuser'];
    });

  }

  
  
  signin(){

    const { email , rfc , username, password , type , userdata } = this.registerform.value;

    this.admin.createuser(email , rfc , username, password , type , userdata ).subscribe( data => {
      if(data){
        Swal.fire({
          title: 'Registro de Usuario Exitoso',
          text: 'Se ha realizado Correctamente',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        this.router.navigateByUrl('/admin/home');
      }else{
        Swal.fire({
          title: 'Registro de Usuario no Realizado',
          text: 'Favor de verificar los datos',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
        
      }
    });

  }

}
