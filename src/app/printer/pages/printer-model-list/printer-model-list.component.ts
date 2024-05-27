import { Component, OnInit } from '@angular/core';
import { PrinterService } from '../../services/printer.service';
import { PrinterModel } from '../../interfaces/printer-model.inteface';

@Component({
  selector: 'app-printer-model-list',
  templateUrl: './printer-model-list.component.html',
  styles: ``
})
export class PrinterModelListComponent implements OnInit{

  columnTitles: string[] = ['Marca', 'Modelo', 'Tipo', 'Opciones'];
  modelList: PrinterModel[] = [];




  constructor(
    private printerService: PrinterService,
  ){}


  ngOnInit(): void {
    this.getModelList();
  }

  getModelList(){
    this.printerService.getPrinterModels().subscribe(data => {
      this.modelList = this.modelList;
    })
  }

}
