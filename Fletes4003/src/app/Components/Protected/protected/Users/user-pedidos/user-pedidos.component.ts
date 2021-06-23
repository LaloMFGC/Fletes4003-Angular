import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Components/Auth/services/auth.service';
import Swal from 'sweetalert2';
import { User } from '../../../../Auth/Interfaces/interfaces';
import { UsersService } from '../../../services/users.service';


@Component({
  selector: 'app-user-pedidos',
  templateUrl: './user-pedidos.component.html',
  styleUrls: ['./user-pedidos.component.scss']
})
export class UserPedidosComponent implements OnInit {

  producttype: string;
  _user = {} as User;
  userstatus: boolean;


  refinform: FormGroup = this.fb.group({
    
    cargaaddress    : ['',[Validators.required, Validators.minLength(6)]],
    entregaaddress  : ['',[Validators.required, Validators.minLength(6)]],
    cargatime       : ['',[Validators.required]],
    cargadate       : ['',[Validators.required]],
    entregatime     : [null],
    entregadate     : [null],
    product         : ['',[Validators.required]],
    cantidad        : ['',[Validators.required]]
  });

  asfaltform: FormGroup = this.fb.group({
    
    cargaaddress      : ['',[Validators.required, Validators.minLength(6)]],
    entregaaddress    : ['',[Validators.required, Validators.minLength(6)]],
    cargatime         : ['',[Validators.required]],
    cargadate         : ['',[Validators.required]],
    entregatime       : [null],
    entregadate       : [null],
    product           : ['',[Validators.required]],
    cantidad          : ['',[Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private authservice: AuthService,
              private users: UsersService) { }

  ngOnInit(): void {

    this.users.validate().subscribe(resp => {
      this.userstatus = resp['validuser'];
    });

    this.authservice.validarinfo().subscribe(data => {
      this._user.rfc = data['rfc'];
    })
  }

  
  refinpedido(){

    
    const { cargaaddress,
            entregaaddress,
            cargatime,
            cargadate,
            entregatime,
            entregadate,
            product,
            cantidad } = this.refinform.value;


     this.users.createticket( cargaaddress, entregaaddress, cargatime, cargadate, entregatime, entregadate, product, cantidad , this.producttype , this._user.rfc , this._user.username ).subscribe(resp => {
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

  asfaltpedido(){
    
    const { cargaaddress,
            entregaaddress,
            cargatime,
            cargadate,
            entregatime,
            entregadate,
            product,
            cantidad } = this.asfaltform.value;

     this.users.createticket( cargaaddress, entregaaddress, cargatime, cargadate, entregatime, entregadate, product, cantidad , this.producttype , this._user.rfc , this._user.username).subscribe(resp => {
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
