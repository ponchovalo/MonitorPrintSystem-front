import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { PrinterService } from '../../services/printer.service';
import { PrinterModel } from '../../interfaces/printer-model.inteface';

@Component({
  selector: 'model-panel',
  templateUrl: './model-panel.component.html',
  styles: ``
})
export class ModelPanelComponent{


  @Output()
  closeDialog = new EventEmitter()


  constructor(
    private fb: FormBuilder,
    private printerService: PrinterService
  ){}


  modelForm: FormGroup = this.fb.group({
    brand: ['', [Validators.required]],
    name: ['', [Validators.required]],
    type: ['monocromatico'],
    countOids: this.fb.array([]),
    levelOids: this.fb.array([])
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
    console.log(this.modelForm.valid)
    if(this.modelForm.valid){
      this.printerService.createPrinterModel(this.modelForm.value).subscribe(data =>{
        console.log(data)
      })
      this.onCancel();
    }
  }

  onCancel(){
    for (let i = this.countOids.length; i > 0; i--) {
      this.removeCountOid(i - 1)
    }
    for (let i = this.levelOids.length; i > 0; i--) {
      this.removeLevelOid(i - 1)
    }
    this.modelForm.reset();
    this.closeDialog.emit()
  }

  

}
