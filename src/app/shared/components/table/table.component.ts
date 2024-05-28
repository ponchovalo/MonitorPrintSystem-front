import { Component, Input, OnInit } from '@angular/core';
import { PrinterModel } from '../../../printer/interfaces/printer-model.inteface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: ``
})
export class TableComponent implements OnInit{
  

  @Input() columnTitles!: string[];

  @Input() data!: PrinterModel[];

  @Input() typeTable!: string;

  elements: any[] = []

  ngOnInit(): void {
    if(this.typeTable === 'tableModel'){
      this.elements = [
        {field: 'brand'},
        {field: 'name'},
        {field: 'type'}
      ]
    }
  }



}
