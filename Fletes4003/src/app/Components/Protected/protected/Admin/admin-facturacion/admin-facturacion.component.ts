import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { User } from '../../../../Auth/Interfaces/interfaces';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-admin-facturacion',
  templateUrl: './admin-facturacion.component.html',
  styleUrls: ['./admin-facturacion.component.scss']
})
export class AdminFacturacionComponent implements OnInit {

  ordenes: any[] = [];
  _user: User;
  status: string;
  userstatus : boolean;

  facturar: FormGroup = this.fb.group({

    folio: ['',[Validators.required]],
    status: ['',[Validators.required]],
    factura: ['',[Validators.required]]

  })

  


  constructor(private fb: FormBuilder,
              private admin: AdminService,
              private router: Router,
              private users: UsersService) { }

  ngOnInit(): void {

    this.users.validate().subscribe(resp => {
      this.userstatus = resp['validuser'];
    });

  }

  facturarticket(){

    const { folio , status , factura } = this.facturar.value;


    this.admin.facturar( folio , status , factura).subscribe( resp => {
      if (resp == true) {
        Swal.fire({
          title: 'Bienvenido a Fletes4003',
          text: 'Gracias por su preferencia',
          icon: 'success',
          confirmButtonText: 'ok'
        });
        this.router.navigateByUrl('/admin/Home');
      } else {
        Swal.fire({
          title: 'Inicio de Sesión Fallido',
          text: 'Favor de verificar los datos',
          icon: 'error',
          confirmButtonText: 'ok'
        });
      }
    })

  }

  mostrar(){

    this.ordenes = [];

    this.admin.obtaindata().subscribe( data => {
      data.forEach(element => {
        console.log(this.status , element['PROVSTATUS']);
        if(this.status == element['PROVSTATUS']){
          this.ordenes.push(element);
        }

      });
    });

  }

  



}
