import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: ``
})
export class TableComponent {

  @Input() columnTitles!: string[];

}
