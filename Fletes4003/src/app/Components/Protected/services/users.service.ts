import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AuthResponse, User, TicketResponse } from '../../Auth/Interfaces/interfaces';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Time } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private baseUrl: string = environment.baseUrl;
  private _user = { } as User;

  constructor(private http: HttpClient) { }


  getUser(){
    return this._user;
  }

  createticket(cargaaddress: string, entregaaddress: string, cargatime: Time, cargadate: Date, entregatime: Time, entregadate: Date, product: string, cantidad: Number, producttype: string , rfc: string , username: string){
    const url = `${ this.baseUrl }/auth/userticket`;

    const body = { cargaaddress, entregaaddress, cargatime, cargadate, entregatime, entregadate, product, cantidad, producttype , rfc , username };

    return this.http.post<AuthResponse>(url, body)
              .pipe(
                tap( resp => {
                  return resp;
                }),
                map( resp => resp.ok),
                catchError( err => of(false))
              );

  }

  updateprofile(nombre , razonsocial , address , numaddress , colonia , city , state , phone , rfc , username , zip , userdata ){
    const url = `${this.baseUrl}/auth/updateprofile`;
    const body = { nombre , razonsocial , address , numaddress , colonia , city , state , phone , rfc , username, zip , userdata };
    return this.http.post<AuthResponse>(url, body)
              .pipe(
                tap( resp => {
                  return resp;
                }),
                map( resp => resp.ok),
                catchError( err => of(false))
              );
  }

  obtaindata(){
    const url = `${this.baseUrl}/auth/obtaindata`;
    const headers = new HttpHeaders()
                    .set('x-token', localStorage.getItem('token') || ''); 

    return this.http.get<TicketResponse>( url , { headers } )
      .pipe(
        map( resp => {
          return resp['resp'];          
        }),
        catchError( err => of(err))
      )
  }

  validate(){
    const url = `${this.baseUrl}/auth/validate`;
    
    const headers = new HttpHeaders()
                      .set('x-token', localStorage.getItem('token') || '');                
    
    return this.http.get<AuthResponse>( url , { headers } )
        .pipe(
          map( resp => {
            return resp;
          }),
          catchError( err => of(err))
        );  
  }



}
