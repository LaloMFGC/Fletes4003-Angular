import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { Utils } from '../../Utils/Utils';
import { excelbase } from '../../../../Modules/excel';
import { ExcelService } from '../../../services/excel.service';
import { UsersService } from '../../../services/users.service';



@Component({
  selector: 'app-admin-ordenes',
  templateUrl: './admin-ordenes.component.html',
  styleUrls: ['./admin-ordenes.component.scss']
})

export class AdminOrdenesComponent implements OnInit {

  busqueda: any;
  ordenes: any[] = [];
  fecha: Date;
  userstatus: boolean;
  exceldata:any [] = [];
  pdfdata:any [] = [];
  logoDataUrl: string;


  constructor( private admin: AdminService,
               private excelservice: ExcelService,
               private users: UsersService) { }

  ngOnInit(): void {

    this.users.validate().subscribe(resp => {
      this.userstatus = resp['validuser'];
    });

    Utils.getImageDataUrlFromLocalPath1('../assets/Images/Logo.png').then(
      result => this.logoDataUrl = result
    );

  }

  
  mostrardia(){

    this.ordenes = [];

    this.admin.obtaindata().subscribe( data => {
      data.forEach(element => {

        console.log(element);

        if(element['PROVENTREGACLIENTDATE'] == (this.fecha)){
          this.ordenes.push(element);
        }      
      });
    });

    

  }


  mostrarmes(){

    this.ordenes = [];

    console.log(this.fecha);

    this.admin.obtaindata().subscribe( data => {
      data.forEach(element => {
        

        let month = element['PROVENTREGACLIENTDATE'];

        if(month != null){
          let fecha2 = month.substring(0,7);

          if(fecha2 == (""+this.fecha)){
            this.ordenes.push(element);
          }
        }

      });
    });

  }


  exportmes(){ // Esta funcion realiza la exportacion de datos a Excel dependiendo del año y el mes
    
    let excel = { } as excelbase;

    this.ordenes.forEach( data => {

      excel = { } as excelbase;

      excel.Folio = data['TICKETID'];
      
      excel.RFC = data['RFC_ID'];
      
      excel.Producto = data['PROVPRODUCT'];
      excel.Tipo_Producto = data['PROVTIPO'];
      excel.Cantidad = data['PROVCANTIDAD'];
      excel.Carta_Porte = data['PROVCARTAPORTE'];
      excel.Costo = data['PROVCOSTO'];    
      excel.Direccion_Carga = data['PROVCARGAADDRESS'];
      excel.Fecha_Carga = data['PROVCARGADATE'];
      excel.Hora_Carga = data['PROVCARGATIME'];      
      excel.Geocerca = data['PROVGEOCERCA'];
      excel.Direccion_Entrega = data['PROVENTREGAADDRESS'];
      excel.Fecha_Entrega = data['PROVENTREGACLIENTDATE'];
      excel.Hora_Entrega_Cliente = data['PROVENTREGACLIENTTIME'];
      excel.Hora_Salida_Cliente = data['PROVSALIDACLIENTTIME'];
      excel.Fecha_Salida_Cliente = data['PROVSALIDACLIENTDATE'];   
      excel.Fecha_Salida_Pemex = data['PROVPEMEXSALIDADATE'];
      excel.Hora_Salida_Pemex = data['PROVPEMEXSALIDATIME'];
      excel.Chofer = data['PROVCHOFER'];
      excel.Unidad = data['PROVUNIDAD'];
      excel.Empresa = data['PROVEMPRESA'];
      excel.Kilometraje = data['PROVKILOMETRAJE'];
      excel.Observaciones = data['PROVOBSERVACIONES'];

      this.exceldata.push(excel);

    });

     this.excelservice.exportExcel(this.exceldata, `${this.fecha}`); 
  }


  exportday(){ // Esta funcion realiza la exportacion de datos a Excel dependiendo del año, el mes y el dia
    
    let excel = { } as excelbase;

    this.ordenes.forEach( data => {

      excel = { } as excelbase;

      excel.Folio = data['TICKETID'];    
      excel.RFC = data['RFC_ID'];
      excel.Producto = data['PROVPRODUCT'];
      excel.Tipo_Producto = data['PROVTIPO'];
      excel.Cantidad = data['PROVCANTIDAD'];
      excel.Carta_Porte = data['PROVCP'];
      excel.Costo = data['PROVCOSTO'];    
      excel.Direccion_Carga = data['PROVCARGAADDRESS'];
      excel.Fecha_Carga = data['PROVCARGADATE'];
      excel.Hora_Carga = data['PROVCARGATIME'];      
      excel.Geocerca = data['PROVGEOCERCA'];
      excel.Direccion_Entrega = data['PROVENTREGAADDRESS'];
      excel.Fecha_Entrega = data['PROVENTREGACLIENTDATE'];
      excel.Hora_Entrega_Cliente = data['PROVENTREGACLIENTTIME'];
      excel.Hora_Salida_Cliente = data['PROVSALIDACLIENTTIME'];
      excel.Fecha_Salida_Cliente = data['PROVSALIDACLIENTDATE'];   
      excel.Fecha_Salida_Pemex = data['PROVPEMEXSALIDADATE'];
      excel.Hora_Salida_Pemex = data['PROVPEMEXSALIDATIME'];
      excel.Chofer = data['PROVCHOFER'];
      excel.Unidad = data['PROVUNIDAD'];
      excel.Empresa = data['PROVEMPRESA'];
      excel.Kilometraje = data['PROMKILOMETRAJE'];
      excel.Observaciones = data['PROVOBSERVACIONES'];

      this.exceldata.push(excel);

    });

     this.excelservice.exportExcel(this.exceldata, `${this.fecha}`); 
  }


  exportdiaref(){
    
    let excel = { } as excelbase;

    let aux:any [] = [];
    let datos: any[] = [];
    let i = 0, total = 0;

    this.ordenes.forEach(data => {
      if((data['PROVPEMEXSALIDADATE'] != null) && 
          (data['PROVUNIDAD'] != null) && 
          (data['PROVCHOFER'] != null) && 
          (data['PROVGEOCERCA'] != null) && 
          (data['PROVCARGADATE'] != null) && 
          (data['PROVSELLO'] != null) && 
          (data['PROVENTREGACLIENTDATE'] != null) && 
          (data['PROVSALIDACLIENTDATE'] != null) && 
          (data['PROVKILOMETRAJE'] != null) && 
          (data['PROVCOSTO'] != null) && 
          (data['PROVOBSERVACIONES'] != null)){
        datos.push(data);
      }
    });

  
    datos.forEach( data => {

      excel = { } as excelbase;
      
      if((data['PROVTIPO'] == 'Refinado') && (data['PROVSTATUS'] != 'Cancelado')){
        
        excel.Id = i+1;
        excel.Unidad = data['PROVUNIDAD'];
        excel.Chofer = data['PROVCHOFER'];
        excel.Geocerca = data['PROVGEOCERCA'];
        excel.Hora_Carga = data['PROVCARGATIME'];
        excel.Hora_Salida_Pemex = data['PROVPEMEXSALIDATIME'];
        excel.Sello = data['PROVSELLO'];
        excel.Hora_Entrega_Cliente = data['PROVENTREGACLIENTTIME'];
        excel.Hora_Salida_Cliente = data['PROVSALIDACLIENTTIME'];   
        excel.Kilometraje = data['PROVKILOMETRAJE'];
        excel.Costo = data['PROVCOSTO'];    
        excel.Observaciones = data['PROVOBSERVACIONES'];
      
        aux.push(excel);

        if(data['PROVCOSTO'] != null){
          total = total + Number(data['PROVCOSTO']); 
          i = i+1;
        }
      }
    });

  function buildTableBody(data, columns, namecolumns) {
    
    let body = [];
  
    body.push(namecolumns);
    
  
    data.forEach(function(row) {
    
      let dataRow = [];
      columns.forEach( column => {
        dataRow.push(""+row[column]);
      });
      
      body.push(dataRow);
          
    });
  
    return body;
  
  }
  
  function table(data, columns, namecolumns) {
      return {
          style: 'tableExample',
          table: {
              headerRows: 1,
              dontBreakRows: true,
              body: buildTableBody(data, columns, namecolumns)              
          },
      };
  }
  
  let dd = {
      content: [ 
        {
          image: this.logoDataUrl,
          width: 100,
          height: 50
        }, 
        
        { text: "Reporte de Refinado ", style: 'header', alignment: 'center' },

        { text: this.fecha, style: 'header', alignment: 'center' },
        
          table( 
            aux, 
            [ 'Id',
              'Unidad',
              'Chofer',
              'Geocerca',
              'Hora_Carga',
              'Hora_Salida_Pemex',
              'Sello',
              'Hora_Entrega_Cliente',
              'Hora_Salida_Cliente',
              'Kilometraje',
              'Costo'
            ],
            [
              'Id',
              'Unidad',
              'Chofer',
              'Geocerca',
              'Llegada Pemex',
              'Salida Pemex',
              'Sello',
              'Llegada CTE',
              'Salida CTE',
              'KM Total',
              'Costo' 
            ]),




          { text: "Cantidad de pedidos: " + i , style: "subheader", alignment: 'right' },
          { text: "Total: $" + total , style: "subheader", alignment: 'right' }
      ],
      styles: {
        header: {
          fontSize: 14,
          bold: true,
          margin: [0, 0, 5, 10]
        },
        subheader: {
          fontSize: 12,
          bold: true,
          margin: [0, 15, 0, 5]
        },
        tableExample: {
          margin: [-30, 0, -20, 0],
          fontSize: 8
        }
      }
  }

    pdfMake.createPdf(dd).download(`Refinado de ${ this.fecha }`);
    
  }


  exportdiaasf(){
    
    let excel = { } as excelbase;

    let aux:any [] = [];
    let datos: any[] = [];
    let i = 0, total = 0;

    this.ordenes.forEach(data => {

      
      if( (data['PROVCARGAADDRESS'] != null) && 
          (data['PROVCP'] != null) &&
          (data['PROVUNIDAD'] != null) && 
          (data['PROVTANQUE'] != null) && 
          (data['PROVENTREGAADDRESS'] != null) &&  
          (data['PROVPRODUCT'] != null) && 
          (data['PROVSTATUS'] != null) && 
          (data['RFC_ID'] != null) && 
          (data['PROVKILOMETRAJE'] != null) && 
          (data['PROVOBSERVACIONES'] != null)){
        
          datos.push(data);

          console.log("\n\n\nAqui esta la data: ",data,"\n\n\n");
      }

    });


    

    datos.forEach( data => {

      excel = { } as excelbase;
      
      if((data['PROVTIPO'] == 'Asfalto') && (data['PROVSTATUS'] != 'Cancelado')){

        excel.Id = i+1;
        excel.Unidad = data['PROVUNIDAD'];
        excel.Tanque = data['PROVTANQUE'];
        excel.Carta_Porte = data['PROVCP'];
        excel.Costo = data['PROVCOSTO'];
        excel.Direccion_Carga = data['PROVCARGAADDRESS'];
        excel.Direccion_Entrega = data['PROVENTREGAADDRESS'];
        excel.RFC = data['RFC_ID'];
        excel.Chofer = data['PROVCHOFER'];
        excel.Producto = data['PROVPRODUCT'];
        excel.Status_Envio = data['PROVSTATUS'];
        excel.Kilometraje = data['PROVKILOMETRAJE'];
        excel.Observaciones = data['PROVOBSERVACIONES'];

        aux.push(excel);

        if(data['PROVCOSTO'] != null){
          total = total + Number(data['PROVCOSTO']); 
          i = i+1;
        }

      }

      

    });

  function buildTableBody(data, columns, namecolumns) {
    
    let body = [];
  
    body.push(namecolumns);
    
  
    data.forEach(function(row) {
    
      let dataRow = [];
      columns.forEach( column => {
        dataRow.push(""+row[column]);
      });
      body.push(dataRow);
          
      });
  
      return body;
  }
  
  function table(data, columns, namecolumns) {
      return {
          style: 'tableExample',
          table: {
              headerRows: 1,
              dontBreakRows: true,
              body: buildTableBody(data, columns, namecolumns)
          }
      };
  }
  
  let dd = {
      content: [ 
        {
          image: this.logoDataUrl,
          width: 100,
          height: 50
        }, 
        
        { text: "Reporte de Asfalto ", style: 'header', alignment: 'center' },

        { text: this.fecha, style: 'header', alignment: 'center' },
        
          table( 
            aux, 
            [ 'Id',
              'RFC',
              'Unidad',
              'Tanque',
              'Carta_Porte',
              'Direccion_Carga',
              'Direccion_Entrega',
              'Chofer',
              'Producto',       
              'Kilometraje',
              'Costo',
            ],
            [
              'Id',
              'RFC',
              'Tractor',
              'Tanque',
              'C.Porte',
              'Origen',
              'Destino',
              'Chofer',
              'Producto',
              'KM Total',
              'Costo',
            ]),




          { text: "Cantidad de pedidos: " + i , style: "subheader", alignment: 'right' },
          { text: "Total: $" + total , style: "subheader", alignment: 'right' }
      ],
      styles: {
        header: {
          fontSize: 14,
          bold: true,
          margin: [0, 0, 5, 10]
        },
        subheader: {
          fontSize: 12,
          bold: true,
          margin: [0, 15, 0, 5]
        },
        tableExample: {
          margin: [-30, 0, -20, 0],
          fontSize: 8
        }
      }
  }


    pdfMake.createPdf(dd).download(`Asfalto de ${this.fecha }`);
   
  }


  exportmesref(){
    
    let excel = { } as excelbase;

    let aux:any [] = [];
    let datos: any[] = [];
    let i = 0, total = 0;

    this.ordenes.forEach(data => {

      if((data['PROVPEMEXSALIDADATE'] != null) && 
         (data['PROVUNIDAD'] != null) && 
         (data['PROVCHOFER'] != null) && 
         (data['PROVGEOCERCA'] != null) && 
         (data['PROVCARGADATE'] != null) && 
         (data['PROVSELLO'] != null) && 
         (data['PROVENTREGACLIENTDATE'] != null) && 
         (data['PROVSALIDACLIENTDATE'] != null) && 
         (data['PROVKILOMETRAJE'] != null) && 
         (data['PROVCOSTO'] != null) && 
         (data['PROVOBSERVACIONES'] != null)){
        datos.push(data);
      }
    })

    

    datos.forEach( data => {

      excel = { } as excelbase;
      
      if((data['PROVTIPO'] == 'Refinado') && (data['PROVSTATUS'] != 'Cancelado')){
        
        excel.Id = i+1;
        excel.Unidad = data['PROVUNIDAD'];
        excel.Chofer = data['PROVCHOFER'];
        excel.Geocerca = data['PROVGEOCERCA'];
        excel.Hora_Carga = data['PROVCARGATIME'];
        excel.Hora_Salida_Pemex = data['PROVPEMEXSALIDATIME'];
        excel.Sello = data['PROVSELLO'];
        excel.Hora_Entrega_Cliente = data['PROVENTREGACLIENTTIME'];
        excel.Hora_Salida_Cliente = data['PROVSALIDACLIENTTIME'];   
        excel.Kilometraje = data['PROVKILOMETRAJE'];
        excel.Costo = data['PROVCOSTO'];    
        excel.Observaciones = data['PROVOBSERVACIONES'];
      
        aux.push(excel);

        if(data['Costo'] != null){
          total = total + Number(data['Costo']); 
          i = i+1;
        }
      }
    });

  function buildTableBody(data, columns, namecolumns) {
    
    let body = [];
  
    body.push(namecolumns);
    
  
    data.forEach(function(row) {
    
      let dataRow = [];
      columns.forEach( column => {
        dataRow.push(""+row[column]);
      });
      body.push(dataRow);
          
      });
  
      return body;
  }
  
  function table(data, columns, namecolumns) {
      return {
          style: 'tableExample',
          table: {
              headerRows: 1,
              body: buildTableBody(data, columns, namecolumns)
          }
      };
  }
  
  let dd = {
      content: [ 
        {
          image: this.logoDataUrl,
          width: 100,
          height: 50
        }, 
        
        { text: "Reporte de Refinado ", style: 'header', alignment: 'center' },

        { text: this.fecha , style: 'header', alignment: 'center' },
        
          table( 
            aux, 
            [ 'Id',
              'Unidad',
              'Chofer',
              'Geocerca',
              'Hora_Carga',
              'Hora_Salida_Pemex',
              'Sello',
              'Hora_Entrega_Cliente',
              'Hora_Salida_Cliente',
              'Kilometraje',
              'Costo'
            ],
            [
              'Id',
              'Unidad',
              'Chofer',
              'Geocerca',
              'Llegada Pemex',
              'Salida Pemex',
              'Sello',
              'Llegada CTE',
              'Salida CTE',
              'KM Total',
              'Costo' 
            ]),




          { text: "Cantidad de pedidos: " + i , style: "subheader", alignment: 'right' },
          { text: "Total: $" + total , style: "subheader", alignment: 'right' }
      ],
      styles: {
        header: {
          fontSize: 14,
          bold: true,
          margin: [0, 0, 5, 10]
        },
        subheader: {
          fontSize: 12,
          bold: true,
          margin: [0, 15, 0, 5]
        },
        tableExample: {
          margin: [-30, 0, -20, 0],
          fontSize: 8
        }
      }
  }

    pdfMake.createPdf(dd).download(`Refinado de ${this.fecha}`);
    
  }


  exportmesasf(){
    
    let excel = { } as excelbase;

    let aux:any [] = [];
    let datos: any[] = [];
    let i = 0, total = 0;

    this.ordenes.forEach(data => {

      //Verificar esta linea de codigo
      if( (data['PROVCARGAADDRESS'] != null) && 
          (data['PROVCP'] != null) && 
          (data['PROVUNIDAD'] != null) && 
          (data['PROVTANQUE'] != null) && 
          (data['PROVENTREGAADDRESS'] != null) && 
          (data['RFC_ID'] != null) && 
          (data['PROVPRODUCT'] != null) && 
          (data['PROVSTATUS'] != null) && 
          (data['PROVKILOMETRAJE'] != null) && 
          (data['PROVOBSERVACIONES'] != null)){
          datos.push(data);
      }

    });

    datos.forEach( data => {

      excel = { } as excelbase;
      
      if((data['PROVTIPO'] == 'Asfalto') && (data['PROVSTATUS'] != 'Cancelado')){

        excel.Id = i+1;
        excel.Unidad = data['PROVUNIDAD'];
        excel.Tanque = data['PROVTANQUE'];
        excel.Carta_Porte = data['PROVCP'];
        excel.Costo = data['PROVCOSTO'];
        excel.Direccion_Carga = data['PROVCARGAADDRESS'];
        excel.Direccion_Entrega = data['PROVENTREGAADDRESS'];
        excel.RFC = data['RFC_ID'];
        excel.Chofer = data['PROVCHOFER'];
        excel.Producto = data['PROVPRODUCT'];
        excel.Status_Envio = data['PROVSTATUS'];
        excel.Kilometraje = data['PROVKILOMETRAJE'];

        aux.push(excel);

        if(data['Costo'] != null){
          total = total + Number(data['Costo']); 
          i = i+1;
        }

      }

      

    });

  function buildTableBody(data, columns, namecolumns) {
    
    let body = [];
  
    body.push(namecolumns);
    
  
    data.forEach(function(row) {
    
      let dataRow = [];
      columns.forEach( column => {
        dataRow.push(""+row[column]);
      });
      body.push(dataRow);
          
      });
  
      return body;
  }
  
  function table(data, columns, namecolumns) {
      return {
          style: 'tableExample',
          table: {
              headerRows: 1,
              body: buildTableBody(data, columns, namecolumns)
          }
      };
  }
  
  let dd = {
      content: [ 
        {
          image: this.logoDataUrl,
          width: 100,
          height: 50
        }, 
        
        { text: "Reporte de Asfalto ", style: 'header', alignment: 'center' },

        { text: this.fecha, style: 'header', alignment: 'center' },
        
          table( 
            aux, 
            [ 'Id',
              'Unidad',
              'Tanque',
              'Carta_Porte',
              'Direccion_Carga',
              'Direccion_Entrega',
              'Razon_Social',
              'Chofer',
              'Producto',
              'Status_Envio',            
              'Kilometraje',
              'Costo'
            ],
            [
              'Id',
              'Tractor',
              'Tanque',
              'Carta Porte',
              'Origen',
              'Destino',
              'Cliente',
              'Chofer',
              'Producto',
              'Status',
              'KM Total',
              'Costo'              
            ]),




          { text: "Cantidad de pedidos: " + i , style: "subheader", alignment: 'right' },
          { text: "Total: $" + total , style: "subheader", alignment: 'right' }
      ],
      styles: {
        header: {
          fontSize: 14,
          bold: true,
          margin: [0, 0, 5, 10]
        },
        subheader: {
          fontSize: 12,
          bold: true,
          margin: [0, 15, 0, 5]
        },
        tableExample: {
          margin: [-30, 0, -20, 0],
          fontSize: 8
        }
      }
  }


    pdfMake.createPdf(dd).download(`Asfalto de ${ this.fecha }`);

  }




}
