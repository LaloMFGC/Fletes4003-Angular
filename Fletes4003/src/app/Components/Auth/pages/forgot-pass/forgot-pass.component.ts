import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdminService } from '../../../Protected/services/admin.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ForgotPassComponent implements OnInit {

  email: string;

  constructor( private auth: AuthService,
               private router: Router) { }

  ngOnInit(): void {
  
  }

  recoverpass(){

    this.auth.recoverpass(this.email).subscribe( resp => {
      if(resp){
        Swal.fire({
          title: 'Se ha enviado el reinicio del correo',
          text: 'Favor de verificar su correo electronico',
          icon: 'success',
          confirmButtonText: 'ok'
        });
        this.router.navigateByUrl('/auth/login');
      }else{
        Swal.fire({
          title: 'No se ha enviado el reinicio del correo',
          text: 'Favor de verificar los datos',
          icon: 'error',
          confirmButtonText: 'ok'
        });
      }
    }) 

  }

}
