import { Component, OnInit } from '@angular/core';
import { PrinterService } from '../../services/printer.service';
import { PrinterModel } from '../../interfaces/printer-model.inteface';

@Component({
  selector: 'app-printer-model-list',
  templateUrl: './printer-model-list.component.html',
  styles: ``
})
export class PrinterModelListComponent implements OnInit{

  tableType: string = 'modelTable'
  tableData: PrinterModel[] = [];
  tableCaptions: any[] = [ {caption: 'Marca'}, {caption:'Modelo'}, {caption:'Tipo'}, {caption:'Acciones'} ];
  tableColumns: any[] = [ {column: 'brand'}, {column: 'name'}, {column: 'type'} ]

  visible: boolean = false;

  constructor(
    private printerService: PrinterService,
  ){}

  ngOnInit(): void {
    this.getModelList()
  }

  //-Obtiene el listado de los modelos------------------------------------------------//
  getModelList(){
    this.printerService.getPrinterModels().subscribe(data => {
      this.tableData = data;
    })
  }

  deleteItem(id: string){
    this.printerService.deletePrinterModelo(id).subscribe(()=>{
      this.getModelList();
    })
  }

  showDialog(){
    this.visible = true;
  }

  closeDialog(accion: string){
    if(accion === "Guardar"){
      this.getModelList();
      this.visible = false;
      console.log(accion)
    }else {
      this.visible = false;
      console.log(accion)
    }
  }


}
