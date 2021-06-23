import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../Auth/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from 'src/app/Components/Auth/Interfaces/interfaces';


declare var $:any;


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styles: [
  ]
})
export class UserDashboardComponent implements OnInit {

  constructor(private authservice: AuthService,
              private router: Router) { }

  _user = { } as User;

  ngOnInit(): void {
    this.authservice.validarinfo().subscribe( data => {
      this._user.username = data['username'];
    })
  }

  

  hidebutton(){
    $("#close-sidebar").click(function() {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function() {
      $(".page-wrapper").addClass("toggled");
    });
  }

  logout(){

    this.authservice.logout();

    Swal.fire({
      title: 'Se ha cerrado sesión con éxito',
      text: 'Gracias por su visita',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });

    this.router.navigateByUrl('/auth');
  }


}
