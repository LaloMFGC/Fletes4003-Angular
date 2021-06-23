import { Time } from "@angular/common";

export interface AuthResponse {

    ok          : string,
    email       : string,
    token       : string,
    rfc         : string,
    type        : string,
    validuser   : boolean,

}

export interface User{
    
    rfc         : string,
    username    : string,
    ok          : any

}

export interface UserProfile{

    name        : string,
    razonsocial : string,
    phone       : number,
    numaddress  : string,
    address     : string,
    colonia     : string,
    state       : string,
    city        : string
}

export interface TicketResponse{

    cargaaddress    : string,
    entregaaddress  : string,
    cargatime       : string,
    cargadate       : Date,
    entregatime     : Time,
    entregadate     : Date,
    product         : string,
    cantidad        : string

}