import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AuthService } from '../Auth/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ValidartokenGuard implements CanActivate, CanLoad {

  constructor(private authservice: AuthService,
              private router: Router){

  }


  canActivate(): Observable<boolean> | boolean{

    return this.authservice.validartoken()
            .pipe(
              tap( valid => {
                if( valid != true ){
                  this.router.navigateByUrl('/auth');
                }
              })
            );

  }

  
  canLoad(): Observable<boolean> | boolean{

    return this.authservice.validartoken()
            .pipe(
              tap( valid => {
                if( valid != true ){
                  this.router.navigateByUrl('/auth');
                }
              })
            );
  }

}
