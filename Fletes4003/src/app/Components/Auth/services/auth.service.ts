import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { AuthResponse, User } from '../Interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _user!: User;

  constructor(private http: HttpClient) { }


  get User(){
    return { ...this._user };
  }

  
  login(email: string, password: string){
    const url = `${this.baseUrl}/auth/login`;
    const body = { email, password };

    return this.http.post<AuthResponse>(url, body)
              .pipe(
                tap( res => {
                  localStorage.setItem('token', res.token! );
                }),
                map( resp => resp),
                catchError( err => of(false))
              );
  }


  validartoken(): Observable<boolean>{  // Es para validar que este conectado debido a que solo devuelve un false o un true

    const url = `${ this.baseUrl }/auth/renew`;

    const headers = new HttpHeaders()
                      .set('x-token', localStorage.getItem('token') || '');                
    return this.http.get<AuthResponse>( url , { headers } )
      .pipe(
        map( resp => {
          return resp.ok
        }),
        catchError( err => of(err))
      );
  }


  validarinfo(): Observable<boolean> {  // Obtiene la informacion del usuario para poder grabar o actualizar informacion

    const url = `${ this.baseUrl }/auth/renew`;

    const headers = new HttpHeaders()
                      .set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>( url , { headers } )
      .pipe(
        map( resp => {
          this._user = {
            rfc: resp.rfc!,
            username: resp['username'],
            ok: resp.ok
          }
          return resp;
        }),
        catchError( err => of(err))
      )
  }

  logout(){
    localStorage.clear();
  }

  recoverpass(email: string){

    const url = `${ this.baseUrl }/auth/forgotpass`;

    const body = { email };

    return this.http.post<AuthResponse>(url, body)
    .pipe(
      tap( resp => {
        return resp;
      }),
      map( resp => resp.ok),
      catchError( err => of(false))
    );

  }

  resetpass(rfc: string, password: string){

    const url = `${ this.baseUrl }/auth/resetpass`;

    const body = { rfc , password };

    return this.http.post<AuthResponse>(url, body)
    .pipe(
      tap( resp => {
        return resp;
      }),
      map( resp => resp.ok),
      catchError( err => of(false))
    );
  }

}
