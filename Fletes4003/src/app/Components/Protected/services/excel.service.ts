import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }


  fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  fileExtension = '.xlsx';

  public exportExcel(jsonData: any[], fileName: string): void {

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData, {cellDates: true});
    const wscols: XLSX.ColInfo[] = [
      {wch: 18},
      {wch: 18},
      {wch: 50},
      {wch: 18},
      {wch: 18},
      {wch: 18},
      {wch: 18},
      {wch: 60},
      {wch: 18},
      {wch: 18},
      {wch: 18},
      {wch: 60},
      {wch: 18},
      {wch: 18},
      {wch: 18},
      {wch: 18},
      {wch: 18},
      {wch: 18},
      {wch: 50},
      {wch: 18},
      {wch: 18},
      {wch: 17},
      {wch: 80}
    ];

    ws["!cols"] = wscols;
    
    let wb: XLSX.WorkBook = { SheetNames: <string[]>[], Sheets: {} };
    
    wb.SheetNames.push('Lista de Pedidos');
    wb.Sheets['Lista de Pedidos'] = ws;  

    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    this.saveExcelFile(excelBuffer, fileName);

  }


  private saveExcelFile(buffer: any, fileName: string): void {



    const data: Blob = new Blob([buffer], {type: this.fileType});
    FileSaver.saveAs(data, fileName + this.fileExtension);
  
  
  }










  



}