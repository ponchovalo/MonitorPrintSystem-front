import { Component } from '@angular/core';

@Component({
  selector: 'app-printers-list',
  templateUrl: './printers-list.component.html',
  styleUrl: './printers-list.component.css'
})
export class PrintersListComponent {

  columnTitles: string[] = ['Nombre', 'Modelo', 'Serie', 'Ip', 'Opciones']

}
