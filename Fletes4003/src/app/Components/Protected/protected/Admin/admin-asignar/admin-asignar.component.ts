import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';
import { AuthService } from '../../../../Auth/services/auth.service';
import { User } from 'src/app/Components/Auth/Interfaces/interfaces';
import Swal from 'sweetalert2';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-admin-asignar',
  templateUrl: './admin-asignar.component.html',
  styleUrls: ['./admin-asignar.component.scss']
})
export class AdminAsignarComponent implements OnInit {

  status      : string;
  asignprod   : string;
  producttype : string;
  opcion      : string;
  foliocancel : Number;
  statuscancel: string;
  cancel      : string;
  findemp     : string;
  findstatus  : string;
  _user = { } as User;
  ordenes     : any [] = [];
  userstatus  : boolean;

  asfaltform: FormGroup = this.fb.group({
    folio            : ['',[Validators.required , Validators.pattern("([0-9])+")]],
    empresa          : ['',[Validators.required]],
    adminuser        : ['',[Validators.required]],
    entregadate      : ['Por Asignar',[Validators.required]],
    unidad           : ['',[Validators.required]],
    chofer           : ['',[Validators.required]],
    cartaporte       : ['',[Validators.required]],
    status           : ['',[Validators.required]]

  });

  refinform: FormGroup = this.fb.group({

    folio            : ['',[Validators.required]],
    empresa          : ['',[Validators.required]],
    entregadate      : ['',[Validators.required]],
    adminuser        : ['',[Validators.required]],
    unidad           : ['',[Validators.required]],
    chofer           : ['',[Validators.required]],
    cartaporte       : ['',[Validators.required]],
    status           : ['',[Validators.required]]
  });

  asfaltupd: FormGroup = this.fb.group({
    folio            : ['',[Validators.required]],
    status           : ['',[Validators.required]],
    pemexllegadadate : ['',[Validators.required]],
    pemexsalidadate  : ['',[Validators.required]],
    entregaclientdate: ['',[Validators.required]],
    kilometraje      : ['',[Validators.required]],
    tanque           : ['',[Validators.required]],
    gastos           : ['',[Validators.required]],
    costo            : ['',[Validators.required]],
    observaciones    : ['',[Validators.required]] 
  });

  refinupd: FormGroup = this.fb.group({
    folio            : ['',[Validators.required]],
    status           : ['',[Validators.required]],
    pemexllegadatime : ['',[Validators.required]],
    pemexllegadadate : ['',[Validators.required]],
    pemexsalidatime  : ['',[Validators.required]],
    pemexsalidadate  : ['',[Validators.required]],
    entregaclienttime: ['',[Validators.required]],
    entregaclientdate: ['',[Validators.required]],
    salidaclienttime : ['',[Validators.required]],
    salidaclientdate : ['',[Validators.required]],
    geocerca         : ['',[Validators.required]],
    kilometraje      : ['',[Validators.required]],
    sello            : ['',[Validators.required]],
    costo            : ['',[Validators.required]],
    observaciones    : ['',[Validators.required]]
  });

  constructor(private fb: FormBuilder, 
              private admin: AdminService,
              private authservice: AuthService,
              private users: UsersService) { }

  ngOnInit(): void {

    this.users.validate().subscribe(resp => {
      this.userstatus = resp['validuser'];
    });


    this.authservice.validarinfo().subscribe( data => {
      this._user.rfc = data['rfc'];
      this._user.username = data['username'];
    });

  }

  refasign(){

    const { folio,
            empresa, 
            entregadate,
            adminuser,
            unidad,
            chofer,
            cartaporte,
            status } = this.refinform.value;

    this.admin.adminasign(folio, empresa, entregadate, adminuser, unidad, chofer, cartaporte, status , this._user.rfc , this._user.username ).subscribe( data => {
        
      if(data){
        Swal.fire({
          title: 'Asignación exitosa',
          text: 'Bienvenido a Fletes4003',
          icon: 'success',
          confirmButtonText: 'ok'
        });
      }else{
        Swal.fire({
          title: 'Asignación Fallida',
          text: 'Favor de verificar los datos',
          icon: 'error',
          confirmButtonText: 'ok'
        })
      }

    });
    this.refinform.reset();
    
  }
  
  asfaltasign(){
    
    const { folio,
            empresa, 
            entregadate,
            adminuser,
            unidad,
            chofer,
            cartaporte,
            status } = this.asfaltform.value;

    this.admin.adminasign(folio, empresa, entregadate ,adminuser, unidad, chofer, cartaporte, status , this._user.rfc , this._user.username ).subscribe( data => {
      if(data){
        Swal.fire({
          title: 'Asignación exitosa',
          text: 'Bienvenido a Fletes4003',
          icon: 'success',
          confirmButtonText: 'ok'
        });
      }else{
        Swal.fire({
          title: 'Asignación Fallida',
          text: 'Favor de verificar los datos',
          icon: 'error',
          confirmButtonText: 'ok'
        })
      }
    });
    this.asfaltform.reset();

  }
  
  refupdate(){
    
    const { folio,
            status,
            pemexllegadatime,
            pemexllegadadate,
            pemexsalidatime,
            pemexsalidadate,
            entregaclienttime,
            entregaclientdate ,
            salidaclienttime,
            salidaclientdate,
            geocerca,
            kilometraje ,
            sello ,
            costo , 
            observaciones } = this.refinupd.value;
    
            
    this.admin.refupdate( folio,
                          status,
                          pemexllegadatime,
                          pemexllegadadate,
                          pemexsalidatime,
                          pemexsalidadate,
                          entregaclienttime,
                          entregaclientdate ,
                          salidaclienttime,
                          salidaclientdate,
                          geocerca,
                          kilometraje ,
                          sello ,
                          costo , 
                          observaciones).subscribe(data => {

     if(data){
        Swal.fire({
          title: 'Asignación exitosa',
          text: 'Ticket Pendiente Por Facturar',
          icon: 'success',
          confirmButtonText: 'ok'
        });
      }else{
        Swal.fire({
          title: 'Asignación Fallida',
          text: 'Favor de verificar los datos',
          icon: 'error',
          confirmButtonText: 'ok'
        })
      }

    })        

  }

  asfaltupdate(){

    const { folio,
            status,
            pemexllegadadate,
            pemexsalidadate,
            entregaclientdate,
            kilometraje,
            tanque,
            gastos,
            costo,
            observaciones } = this.asfaltupd.value;

    this.admin.asfupdate( folio,
                          status,
                          pemexllegadadate,
                          pemexsalidadate,
                          entregaclientdate,
                          kilometraje,
                          tanque,
                          gastos,
                          costo,
                          observaciones).subscribe(data => {

        if(data){
          Swal.fire({
            title: 'Asignación exitosa',
            text: 'Ticket Pendiente Por Facturar',
            icon: 'success',
            confirmButtonText: 'ok'
          });
        } else{
          Swal.fire({
            title: 'Asignación Fallida',
            text: 'Favor de verificar los datos',
            icon: 'error',
            confirmButtonText: 'ok'
          })
        }

    })        

  }

  cancelticket(){
    
    this.admin.cancelticket(this.foliocancel, this.statuscancel, this.cancel).subscribe( data => {

      if(data){
        Swal.fire({
          title: 'Cancelación exitosa',
          text: 'Ticket Cancelado',
          icon: 'success',
          confirmButtonText: 'ok'
        });
      } else{
        Swal.fire({
          title: 'Cancelación Fallida',
          text: 'Favor de verificar los datos',
          icon: 'error',
          confirmButtonText: 'ok'
        })
      }

    });

    this.cancel = "" , 
    this.foliocancel = null, 
    this.statuscancel = "";
   

  }

  mostrar(){
    this.ordenes = [];
    this.admin.obtaindata().subscribe( data => {
      data.forEach( element => {
        if(element['PROVSTATUS'] == this.findstatus && element['PROVEMPRESA'] == this.findemp){
          this.ordenes.push(element);
        }
      });
    });
  }

}
