import { Time } from '@angular/common';

export interface excelbase {

    Folio: string;
    RFC: string;
    Direccion_Carga: string; //direccion de carga
    Fecha_Carga: Date;  //Fecha de Carga
    Hora_Carga: Time; //verificar que funcione
    Direccion_Entrega: string; //Direccion de entrega
    Fecha_Entrega: Date;  //Fecha de entrega
    Hora_Entrega_Cliente: Time; //Verificar que funcione
    Fecha_Salida_Cliente: Date;   //Fecha de salida
    Hora_Salida_Cliente: Time;   //Hora de Salida
    Fecha_Salida_Pemex: Date;
    Hora_Salida_Pemex: Time;
    Tipo_Producto: string;    //Tipo de Producto
    Producto: string;
    Cantidad: number;
    Unidad: number;
    Chofer: string;
    Carta_Porte: string;
    Geocerca: string;
    Kilometraje: string;
    Costo: number;
    Observaciones: string;
    Empresa: string;
    Sello: string;
    Id: number;
    Tanque: string;
    Status_Envio: string;
   
}