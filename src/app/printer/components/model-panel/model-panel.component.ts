import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { PrinterService } from '../../services/printer.service';
import { MessageService } from 'primeng/api';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'model-panel',
  templateUrl: './model-panel.component.html',
  styles: ``
})
export class ModelPanelComponent implements OnInit{


  @Output()
  closeDialog = new EventEmitter<string>()


  constructor(
    private fb: FormBuilder,
    private printerService: PrinterService,
    private messageService: MessageService
  ){}

  ngOnInit(): void {
  }

  modelForm: FormGroup = this.fb.group({
    brand: ['', [Validators.required]],
    name: ['', [Validators.required]],
    type: ['monocromatico'],
    countOids: this.fb.array([]),
    levelOids: this.fb.array([]), 
  })

  get countOids(): FormArray{
    return this.modelForm.get('countOids') as FormArray
  }
  get levelOids(): FormArray{
    return this.modelForm.get('levelOids') as FormArray
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

  removeCountOid(i: number){
    this.countOids.removeAt(i);
  }
  removeLevelOid(i: number){
    this.levelOids.removeAt(i);
  }

  onSubmit(){
    console.log(this.modelForm.controls['countOids'].value.length > 0)
    if(this.modelForm.valid === true){
      if(this.modelForm.controls['countOids'].value.length > 0 && this.modelForm.controls['levelOids'].value.length){
          this.printerService.createPrinterModel(this.modelForm.value)
        .pipe(
          catchError(this.handleError<string>())
        )
        .subscribe(data =>{  
          this.closeDialog.emit("Guardar");
        })
      }else{
        this.messageService.add({ severity: 'error', summary: 'Accion denegada', detail: 'Agregue Oids' })
      }
    }else {
      this.messageService.add({ severity: 'error', summary: 'Accion denegada', detail: 'Faltan campos por llenar' })
      
    }
  }

  onCancel(){
    this.closeDialog.emit("Cancelar")
  }

  handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      this.messageService.add({ severity: 'error', summary: 'Accion denegada', detail: `${error.error.message}` })
      return of(result as T);
    };
  }

 
}
