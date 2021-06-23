import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Components/Auth/Interfaces/interfaces';
import { AdminService } from '../../../services/admin.service';
import { AuthService } from '../../../../Auth/services/auth.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})

export class AdminHomeComponent implements OnInit {

  _user = { } as User;
  ordenes: any[] = [];

  constructor(private admin: AdminService,
              private authservice: AuthService) { }

  ngOnInit(): void {

    this.authservice.validarinfo().subscribe( data => {
      this._user.username = data['username'];
    });

    this.admin.obtaindata().subscribe( data => {
      data.forEach(element => {
        this.ordenes.push(element);
      });
    });

  }

}