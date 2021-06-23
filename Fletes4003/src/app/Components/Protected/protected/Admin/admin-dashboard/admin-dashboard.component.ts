import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../Auth/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from 'src/app/Components/Auth/Interfaces/interfaces';


declare var $:any;


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  _user = { } as User;
  
  constructor(private authservice: AuthService,
              private router: Router) { }

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
