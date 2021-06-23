import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Components/Auth/Interfaces/interfaces';
import { AuthService } from '../../../../Auth/services/auth.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  _user = { } as User;
  ordenes: any[] = [];

  constructor(private authservice: AuthService,
              private users: UsersService) { }

  ngOnInit(): void {

    this.authservice.validarinfo().subscribe( data => {
      this._user.username = data['username'];
    });

    this.data();

  }


  data(){
    
    this.users.obtaindata().subscribe(resp => {
        
      this.ordenes = [];

      resp.forEach(element => {
        this.ordenes.push(element);
      });

    })
  }
  
}
