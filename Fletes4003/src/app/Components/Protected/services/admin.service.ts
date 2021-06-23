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
export class AdminService {
  
  private baseUrl: string = environment.baseUrl;
  private _user = { } as User;
  private _ticket = { } as TicketResponse;

  constructor(private http: HttpClient) { }


  obtaindata(){
    
    const url = `${this.baseUrl}/auth/adminobtaindata`;
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

  adminasign( folio : string, empresa : string, entregadate: Date, adminuser: string, unidad: string , chofer:string, cartaporte: string , status: string, rfc: string, username: string ){
    const url = `${this.baseUrl}/auth/asignar`;
    const body = { folio, empresa , entregadate, adminuser, unidad, chofer, cartaporte, status, rfc , username };

    return this.http.post<AuthResponse>(url, body)
              .pipe(
                tap( resp => {
                  return resp;
                }),
                map( resp => resp),
                catchError( err => of(false))
              );
  }

  refupdate(folio: Number ,
            status: string ,
            pemexllegadatime: Time,
            pemexllegadadate: Date,
            pemexsalidatime: Time,
            pemexsalidadate: Date,
            entregaclienttime: Time,
            entregaclientdate:Date ,
            salidaclienttime: Time,
            salidaclientdate: Date,
            geocerca: string,
            kilometraje: string ,
            sello: string,
            costo: Number , 
            observaciones: string ){

    const url = `${this.baseUrl}/auth/refupdate`;
    const body = { folio,
                   status,
                   pemexllegadatime,
                   pemexllegadadate,
                   pemexsalidatime,
                   pemexsalidadate,
                   entregaclienttime,
                   entregaclientdate ,
                   salidaclienttime,
                   salidaclientdate,
                   geocerca,
                   kilometraje ,
                   sello ,
                   costo , 
                   observaciones};

    return this.http.post<AuthResponse>(url, body)
              .pipe(
                tap( resp => {
                  return resp;
                }),
                map( resp => resp),
                catchError( err => of(false))
              );


  }

  asfupdate(folio: Number,
            status: string,
            pemexllegadadate: Date,
            pemexsalidadate: Date,
            entregaclientdate: Date,
            kilometraje: string,
            tanque: string,
            gastos: Number,
            costo: Number,
            observaciones: string ){

    const url = `${this.baseUrl}/auth/asfupdate`;
    const body = {  folio,
                    status,
                    pemexllegadadate,
                    pemexsalidadate,
                    entregaclientdate,
                    kilometraje,
                    tanque,
                    gastos,
                    costo,
                    observaciones};

    return this.http.post<AuthResponse>(url, body)
          .pipe(
            tap( resp => {
              return resp;
            }),
            map( resp => resp),
            catchError( err => of(false))
          );


  }
  
  cancelticket(folio: Number, status: string, cancel: string){

    const url = `${this.baseUrl}/auth/cancelticket`;
    const body = {  folio, status };

    return this.http.post<AuthResponse>(url, body)
    .pipe(
      tap( resp => {
        return resp;
      }),
      map( resp => resp),
      catchError( err => of(false))
    );


  }

  refticket(cargaaddress    : string ,
            entregaaddress  : string ,
            cargatime       : Time   ,
            cargadate       : Date   ,
            entregatime     : Time   ,
            entregadate     : Date   ,
            product         : string ,
            cantidad        : string ,
            empresa         : string ,
            status          : string ,
            adminasign      : string ,
            chofer          : string ,
            rfc             : string ,
            unidad          : string ,
            cartaporte      : string ,
            producttype     : string , ){

    const url = `${ this.baseUrl }/auth/refticket`;

    const body = {  cargaaddress    ,
                    entregaaddress  ,
                    cargatime       ,
                    cargadate       ,
                    entregatime     ,
                    entregadate     ,
                    product         ,
                    cantidad        ,
                    empresa         ,
                    status          ,
                    adminasign      ,
                    chofer          ,
                    rfc             ,
                    unidad          ,
                    cartaporte      , 
                    producttype      };

    return this.http.post<AuthResponse>(url, body)
              .pipe(
                tap( resp => {
                  return resp;
                }),
                map( resp => resp.ok),
                catchError( err => of(false))
              );
  }

  asfaltticket( cargaaddress    : string ,
                entregaaddress  : string ,
                cargatime       : Time   ,
                cargadate       : Date   ,
                product         : string ,
                cantidad        : string ,
                empresa         : string ,
                status          : string ,
                adminasign      : string ,
                chofer          : string ,
                rfc             : string ,
                unidad          : string ,
                cartaporte      : string ,
                producttype     : string  ){

    

    const url = `${ this.baseUrl }/auth/asfticket`;

    const body = {  cargaaddress    ,
                    entregaaddress  ,
                    cargatime       ,
                    cargadate       ,
                    product         ,
                    cantidad        ,
                    empresa         ,
                    status          ,
                    adminasign      ,
                    rfc             ,
                    unidad          ,
                    chofer          ,
                    cartaporte      , 
                    producttype      };


    return this.http.post<AuthResponse>(url, body)
          .pipe(
            tap( resp => {
              return resp;
            }),
            map( resp => resp.ok),
            catchError( err => of(false))
          );
  }

  createuser(email: string , rfc : string , username: string , password: string , type: string, userdata: string ){
    
    const url = `${ this.baseUrl }/auth/signin`;

    const body = { email , rfc , username , password , type, userdata };

    return this.http.post<AuthResponse>(url, body)
              .pipe(
                tap( resp => {
                  return resp;
                }),
                map( resp => resp.ok),
                catchError( err => of(false))
              );
  }

  
  facturar(folio: Number, status: string, factura: string){
    const url = `${ this.baseUrl }/auth/facturar`;

    const body = { folio , status , factura };

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
