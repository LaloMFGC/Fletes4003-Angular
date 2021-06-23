import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Components/Auth/Interfaces/interfaces';
import   Swal from 'sweetalert2';
import { AuthService } from '../../../../Auth/services/auth.service';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  
  profile: FormGroup = this.fb.group({
    nombre        : ['',[Validators.required, Validators.minLength(6)]],
    razonsocial   : ['',[Validators.required, Validators.minLength(6)]],
    address       : ['',[Validators.required, Validators.minLength(6)]],
    numaddress    : ['',[Validators.required]],
    colonia       : ['',[Validators.required, Validators.minLength(6)]],
    city          : ['',[Validators.required, Validators.minLength(6)]],
    state         : ['',[Validators.required]],
    phone         : ['',[Validators.required, Validators.minLength(10)]],
    zip           : ['',[Validators.required, Validators.minLength(5)]],
    userdata      : ['true'],
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
        this.router.navigateByUrl('/admin/home');
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
