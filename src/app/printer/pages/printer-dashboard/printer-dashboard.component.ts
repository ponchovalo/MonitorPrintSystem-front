import { Component, OnInit } from '@angular/core';
import { PrinterService } from '../../services/printer.service';
import { PrinterDetail } from '../../interfaces/printer-detail.interfaces';

@Component({
  selector: 'app-printer-dashboard',
  templateUrl: './printer-dashboard.component.html',
  styleUrl: './printer-dashboard.component.css'
})
export class PrinterDashboardComponent implements OnInit {
  
    printersDetails: PrinterDetail[] = [];

    constructor(private printerService: PrinterService){}

    ngOnInit() {
        this.printerService.getPrintersDetails().subscribe(printers => {
            console.log(printers)
            this.printersDetails = printers
        });
    }



}
