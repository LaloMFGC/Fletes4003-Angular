import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Components/Auth/Interfaces/interfaces';
import { AuthService } from 'src/app/Components/Auth/services/auth.service';
import Swal from 'sweetalert2';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {


  profile: FormGroup = this.fb.group({
    nombre      : ['', [Validators.required]],
    razonsocial : ['',[Validators.required]],
    address     : ['',[Validators.required]],
    numaddress  : ['',[Validators.required]],
    colonia     : ['',[Validators.required]],
    city        : ['',[Validators.required]],
    state       : ['',[Validators.required]],
    phone       : ['',[Validators.required]],
    zip         : ['',[Validators.required]],
    userdata    : ['true']
  });

  _user = { } as User;

  constructor(private fb: FormBuilder,
              private router: Router,
              private authservice: AuthService,
              private update: UsersService) { }
  
  ngOnInit(): void {
      this.authservice.validarinfo().subscribe( data => {
      this._user.username = data['username']; // Verificar si se borra o no
      this._user.rfc = data['rfc'];
    });         
  }


  saveprofile(){

    const { nombre ,
            razonsocial, 
            address , 
            numaddress , 
            colonia , 
            city ,
            state , 
            phone ,
            zip,
            userdata } = this.profile.value;

    this.update.updateprofile(nombre, razonsocial, address, numaddress, colonia, city, state, phone, this._user.rfc , this._user.username, zip , userdata).subscribe(resp => {
      if (resp == true) {
        Swal.fire({
          title: 'Bienvenido a Fletes4003',
          text: 'Gracias por su preferencia',
          icon: 'success',
          confirmButtonText: 'ok'
        });
        this.router.navigateByUrl('/users/dashboard');
      } else {
        Swal.fire({
          title: 'Inicio de Sesión Fallido',
          text: 'Favor de verificar los datos',
          icon: 'error',
          confirmButtonText: 'ok'
        });
      }

    });
  }

}
