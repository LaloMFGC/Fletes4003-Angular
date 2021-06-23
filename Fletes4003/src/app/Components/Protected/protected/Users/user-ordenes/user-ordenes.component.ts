import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-ordenes',
  templateUrl: './user-ordenes.component.html',
  styleUrls: ['./user-ordenes.component.scss']
})
export class UserOrdenesComponent implements OnInit {

  ordenes: any[] = [];
  opcion: string;
  userstatus: boolean;

  constructor(private users: UsersService,
              private router: Router) { }

  ngOnInit(): void {

    this.users.validate().subscribe(resp => {
      this.userstatus = resp['validuser'];
    });
    
  }



  mostrar( opcion: string ){
    this.users.obtaindata().subscribe(resp => {
      this.ordenes = [];
      resp.forEach(element => {
        if(element['PROVSTATUS'] == opcion){
          this.ordenes.push(element);
        }
      });
    
    });
  }


}