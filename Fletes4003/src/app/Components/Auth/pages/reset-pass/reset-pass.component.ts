import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResetPassComponent implements OnInit {

  rfc: string;
  password: string;

  constructor( private auth: AuthService,
               private router: Router) { }

  ngOnInit(): void {

  }



  resetpass(){

    this.auth.resetpass(this.rfc , this.password).subscribe( resp => {

      if(resp){
        Swal.fire({
          title: 'Se ha actualizado la contraseña con exito',
          text: 'Favor de verificar su correo electronico',
          icon: 'success',
          confirmButtonText: 'ok'
        });
        this.router.navigateByUrl('/auth/login');
      }else{
        Swal.fire({
          title: 'No se ha podido actualizar la contraseña',
          text: 'Favor de verificar los datos',
          icon: 'error',
          confirmButtonText: 'ok'
        });
      }
    }); 
  }


}


  


