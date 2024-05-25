import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrinterDetail } from '../interfaces/printer-detail.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PrinterService {

  urlBase: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getPrintersDetails() : Observable<PrinterDetail[]>{
    return this.http.get<PrinterDetail[]>(`${this.urlBase}/printer/d/detail`)
  }

}
