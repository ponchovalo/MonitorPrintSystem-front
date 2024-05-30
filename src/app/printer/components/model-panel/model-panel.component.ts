import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { PrinterService } from '../../services/printer.service';
import { MessageService } from 'primeng/api';
import { Observable, catchError, of } from 'rxjs';
import { PrinterModel } from '../../interfaces/printer-model.inteface';
import { Oid } from '../../interfaces/printer-detail.interfaces';

@Component({
  selector: 'model-panel',
  templateUrl: './model-panel.component.html',
  styles: ``
})
export class ModelPanelComponent implements OnInit {


  @Output()
  closeDialog = new EventEmitter<string>()

  @Input() modelSelected?: PrinterModel;

  dialogTitle: string = "Nuevo Modelo"


  constructor(
    private fb: FormBuilder,
    private printerService: PrinterService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.askModelSelected(this.modelSelected)
  }

  modelForm: FormGroup = this.fb.group({
    brand: ['', [Validators.required]],
    name: ['', [Validators.required]],
    type: ['monocromatico'],
    countOids: this.fb.array([]),
    levelOids: this.fb.array([]),
  })

  askModelSelected(model: PrinterModel | undefined) {
    if (model) {
      this.dialogTitle = `Editar modelo ${model.name}`;
      this.modelForm.controls['brand'].setValue(model.brand);
      this.modelForm.controls['name'].setValue(model.name);
      this.modelForm.controls['type'].setValue(model.type);

      model.countOids.map(oid => {
        this.countOids.push(this.editCountOid(oid))
      })
      model.levelOids.map(oid => {
        this.levelOids.push(this.editLevelOid(oid))
      })
      console.log(this.countOids)
    } else {
      console.log(this.modelSelected)
      return
    }
  }

  get countOids(): FormArray {
    return this.modelForm.get('countOids') as FormArray
  }
  get levelOids(): FormArray {
    return this.modelForm.get('levelOids') as FormArray
  }

  editCountOid(oid: Oid): FormGroup {
    return this.fb.group({
      name: [oid.name],
      oid: [oid.oid]
    })
  }
  editLevelOid(oid: Oid): FormGroup {
    return this.fb.group({
      name: [oid.name],
      oid: [oid.oid]
    })
  }

  newCountOid(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      oid: ['', [Validators.required]]
    })
  }
  newLevelOid(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      oid: ['', [Validators.required]]
    })
  }

  addCountOids() {
    this.countOids.push(this.newCountOid())
  }
  addLevelOids() {
    this.levelOids.push(this.newLevelOid())
  }

  removeCountOid(i: number) {
    this.countOids.removeAt(i);
  }
  removeLevelOid(i: number) {
    this.levelOids.removeAt(i);
  }

  onSubmit() {
    if (this.modelForm.valid === true) {
      if (this.modelForm.controls['countOids'].value.length > 0 && this.modelForm.controls['levelOids'].value.length) {
        if (this.modelSelected) {
          this.printerService.updatePrinterModel(this.modelSelected.name, this.modelForm.value)
          .pipe(
            catchError(this.handleError<string>())
          )
          .subscribe(data => {
            this.messageService.add({ severity: 'info', summary: 'Correcto', detail: 'Elemento editado correctamente' })
            this.closeDialog.emit("Guardar");
          })
        } else {
          this.printerService.createPrinterModel(this.modelForm.value)
            .pipe(
              catchError(this.handleError<string>())
            )
            .subscribe(data => {
              this.messageService.add({ severity: 'info', summary: 'Correcto', detail: 'Elemento creado correctamente' })
              this.closeDialog.emit("Guardar");
            })
        }
      } else {
        this.messageService.add({ severity: 'error', summary: 'Accion denegada', detail: 'Agregue Oids' })
      }
    } else {
      this.messageService.add({ severity: 'error', summary: 'Accion denegada', detail: 'Faltan campos por llenar' })

    }
  }

  onCancel() {
    this.closeDialog.emit("Cancelar")
  }

  handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      this.messageService.add({ severity: 'error', summary: 'Accion denegada', detail: `${error.error.message}` })
      return of(result as T);
    };
  }


}
