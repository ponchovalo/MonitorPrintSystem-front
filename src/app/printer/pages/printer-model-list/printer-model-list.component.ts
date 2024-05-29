import { Component, OnInit } from '@angular/core';
import { PrinterService } from '../../services/printer.service';
import { PrinterModel } from '../../interfaces/printer-model.inteface';

@Component({
  selector: 'app-printer-model-list',
  templateUrl: './printer-model-list.component.html',
  styles: ``
})
export class PrinterModelListComponent implements OnInit{

  visible: boolean = false;

  columnTitles: string[] = ['Marca', 'Modelo', 'Tipo', 'Opciones'];
  modelList: PrinterModel[] = [];

  tableType: string = 'modelTable'

  constructor(
    private printerService: PrinterService,
  ){}


  ngOnInit(): void {
    
  }

  showDialog(){
    this.visible = true;
  }
  cerrarDialog(){
    console.log("execute")
    this.getModelList();
  }

  getModelList(){
    this.printerService.getPrinterModels().subscribe(data => {
      console.log(data)
      this.modelList = data;
    })
  }

  raloadOnChange(){
    this.getModelList()
  }

}
