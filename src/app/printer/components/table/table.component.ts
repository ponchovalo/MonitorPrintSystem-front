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

  visible: boolean = false;

  selectedItem!: any;

  @Input() tableType!: string;
  @Input() tableData!: PrinterModel[];
  @Input() tableCaptions!: any[];
  @Input() tableColumns!: any[];

  @Output() deleteItem = new EventEmitter<string>();

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ){}

  ngOnInit(): void {

  }

   ///-Acciones del CRUD--------------------------------------------------------------------------------------------------///
  getElement(id: string){
    console.log(id)
  }
  openDialogEdit(item: any){
    console.log(item)
    console.log(item[Object.keys(item)[1]])
  }
  closeDialogEdit(accion: string){
    this.visible = false
  }
  confirmDelete(event: Event, item: any){
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Deseas eliminar el modelo ${item['name']}`,
      header: 'Confirmacion',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon:"none",
      rejectIcon:"none",
      rejectButtonStyleClass:"p-button-text",
      accept: () => {
        this.deleteItem.emit(item._id)
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Has eliminado el modelo' });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Cancelado', detail: 'Operacion cancelada', life: 3000 });
      }

    })
  }
  
  ///---------------------------------------------------------------------------------------------------------------------///

  



}
