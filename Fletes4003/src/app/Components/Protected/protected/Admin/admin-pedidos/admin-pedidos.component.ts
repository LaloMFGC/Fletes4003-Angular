import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-admin-pedidos',
  templateUrl: './admin-pedidos.component.html',
  styleUrls: ['./admin-pedidos.component.scss']
})
export class AdminPedidosComponent implements OnInit {

  producttype: string;
  userstatus : boolean;
  
  refinform: FormGroup = this.fb.group({
    
    cargaaddress    : ['',[Validators.required, Validators.minLength(6)]],
    entregaaddress  : ['',[Validators.required, Validators.minLength(6)]],
    cargatime       : ['',[Validators.required]],
    cargadate       : ['',[Validators.required]],
    entregadate     : ['',[Validators.required]],
    product         : ['',[Validators.required]],
    unidad          : ['',[Validators.required]],
    cantidad        : ['',[Validators.required]], 
    empresa         : ['',[Validators.required]],   
    rfc             : ['',[Validators.required, Validators.minLength(13)]],
    status          : ['',[Validators.required]],
    adminuser       : ['',[Validators.required]],
    chofer          : ['',[Validators.required, Validators.minLength(6)]],
    cartaporte      : ['',[Validators.required]]
  
  });

  asfaltform: FormGroup = this.fb.group({
    
    cargaaddress      : ['',[Validators.required, Validators.minLength(6)]],
    entregaaddress    : ['',[Validators.required, Validators.minLength(6)]],
    cargatime         : ['',[Validators.required]],
    cargadate         : ['',[Validators.required]],
    product           : ['',[Validators.required]],
    cantidad          : ['',[Validators.required]],
    empresa           : ['',[Validators.required]], 
    status            : ['',[Validators.required]],
    adminuser         : ['',[Validators.required]],
    chofer            : ['',[Validators.required, Validators.minLength(6)]],
    rfc               : ['',[Validators.required, Validators.minLength(13)]], 
    unidad            : ['',[Validators.required]], 
    cartaporte        : ['',[Validators.required]]
  
  });

  constructor(private fb: FormBuilder,
              private admin: AdminService,
              private router: Router,
              private users : UsersService) { }

  ngOnInit(): void {

    this.users.validate().subscribe(resp => {
      this.userstatus = resp['validuser'];
    });

  }


  refinpedido(){

    
    const { cargaaddress    ,
            entregaaddress  ,
            cargatime       ,
            cargadate       ,
            entregatime     ,
            entregadate     ,
            product         ,
            cantidad        ,
            empresa         ,
            status          ,
            adminasign      ,
            chofer          ,
            rfc             ,
            unidad          ,
            cartaporte       } = this.refinform.value;


     this.admin.refticket(  cargaaddress    ,
                            entregaaddress  ,
                            cargatime       ,
                            cargadate       ,
                            entregatime     ,
                            entregadate     ,
                            product         ,
                            cantidad        ,
                            empresa         ,
                            status          ,
                            adminasign      ,
                            chofer          ,
                            rfc             ,
                            unidad          ,
                            cartaporte      , 
                            this.producttype ).subscribe(resp => {
      if (resp == true) {
        Swal.fire({
          title: 'Pedido Realizado',
          text: 'Gracias por su preferencia',
          icon: 'success',
          confirmButtonText: 'ok'
        });
        this.router.navigateByUrl('/admin/Home');
      } else {
        Swal.fire({
          title: 'Pedido No Realizado',
          text: 'Favor de verificar los datos',
          icon: 'error',
          confirmButtonText: 'ok'
        });
      }

    });

    
  }


  asfaltpedido(){

    
    const { cargaaddress ,
            entregaaddress    ,
            cargatime         ,
            cargadate         ,
            product           ,
            cantidad          ,
            empresa           , 
            status            ,
            adminuser         ,
            chofer            ,
            rfc               , 
            unidad            , 
            cartaporte         } = this.asfaltform.value;

     console.log(this.asfaltform.value);

     this.admin.asfaltticket( cargaaddress ,
                              entregaaddress    ,
                              cargatime         ,
                              cargadate         ,
                              product           ,
                              cantidad          ,
                              empresa           , 
                              status            ,
                              adminuser         ,
                              chofer            ,
                              rfc               , 
                              unidad            , 
                              cartaporte        ,
                              this.producttype ).subscribe(resp => {

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

    });
    
  }

}
