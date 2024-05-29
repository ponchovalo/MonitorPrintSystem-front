import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrinterDetail } from '../interfaces/printer-detail.interfaces';
import { PrinterModel } from '../interfaces/printer-model.inteface';

@Injectable({
  providedIn: 'root'
})
export class PrinterService {

  urlBase: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getPrintersList(): Observable<PrinterDetail[]> {
    return this.http.get<PrinterDetail[]>(`${this.urlBase}/printer`);
  }

  getPrintersDetails() : Observable<PrinterDetail[]>{
    return this.http.get<PrinterDetail[]>(`${this.urlBase}/printer/d/detail`);
  }

  // Obtener Listado de Modelos
  getPrinterModels(): Observable<PrinterModel[]>{
    return this.http.get<PrinterModel[]>(`${this.urlBase}/printer-model`)
  }
  // Creacion de un modelo de impresora
  createPrinterModel(model: PrinterModel): Observable<PrinterModel>{
    let url: string = `${this.urlBase}/printer-model`;
    return this.http.post<PrinterModel>(url, model);
  }
  updatePrinterModel(){

  }
  deletePrinterModelo(id: string):Observable<PrinterModel>{
    return this.http.delete<PrinterModel>(`${this.urlBase}/printer-model/${id}`);
  }



}
