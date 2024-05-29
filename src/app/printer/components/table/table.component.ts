import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PrinterModel } from '../../interfaces/printer-model.inteface';
import { PrinterService } from '../../services/printer.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: ``
})
export class TableComponent implements OnInit{

  @Input() tableType!: string;

  data!: PrinterModel[];
  captions: any[] = [];
  columns: any[] = [];

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private printerService: PrinterService
  ){}

  ngOnInit(): void {
    console.log(this.tableType)
    this.loadData(this.tableType)
  }

  // funcion para cargar data segun el tipo
  loadData(tipo: string){
    switch(tipo){
      case 'modelTable':
        this.getModels();
        this.columns = [ {column: 'brand'}, {column: 'name'}, {column: 'type'} ];
        this.captions = [ {caption: 'Marca'}, {caption:'Modelo'}, {caption:'Tipo'}, {caption:'Acciones'} ];
        break
      default:
        break
    }
  }

  //funciones para cargar los datos
  getModels(){
    this.printerService.getPrinterModels().subscribe(data => {
      this.data = data;
    })
  }


   ///-Acciones del CRUD--------------------------------------------------------------------------------------------------///
  getElement(element: PrinterModel){
    console.log(element)
  }
  editElement(element: PrinterModel){
    console.log(element._id)
  }
  deleteElement(id: string){
    this.printerService.deletePrinterModelo(id).subscribe(data => {
      this.loadData(this.tableType)
    })
  }
  confirmDelete(event: Event, id: string){
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Deseas eliminar el modelo',
      header: 'Confirmacion',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon:"none",
      rejectIcon:"none",
      rejectButtonStyleClass:"p-button-text",
      accept: () => {
        this.deleteElement(id);
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Has eliminado el modelo' });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Cancelado', detail: 'Operacion cancelada', life: 3000 });
      }

    })
  }
  ///---------------------------------------------------------------------------------------------------------------------///
  cerrarDialog(){
    console.log("execute")
    this.loadData(this.tableType);
  }
  



}
