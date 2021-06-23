import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  
  
  loginform: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder,
              private authservice: AuthService,
              private router: Router) { }


  ngOnInit(): void {
  }



  login(){

    const { email, password } = this.loginform.value;

    this.authservice.login(email, password).subscribe( resp => {
      
      if(resp['ok'] === true){
        if(resp['type'] == 'user'){
          Swal.fire({
            title: 'Inicio de Sesión Exitoso',
            text: 'Bienvenido a Fletes4003',
            icon: 'success',
            confirmButtonText: 'ok'
          });
          this.router.navigateByUrl('/users/dashboard');
        }else{
          Swal.fire({
            title: 'Inicio de Sesión Exitoso',
            text: 'Bienvenido a Fletes4003',
            icon: 'success',
            confirmButtonText: 'ok'
          });
          this.router.navigateByUrl('/admin/dashboard');
        }
      }else{
        Swal.fire({
          title: 'Inicio de Sesión Fallido',
          text: 'Favor de verificar los datos',
          icon: 'error',
          confirmButtonText: 'ok'
        })
      }

    });


  }




}
