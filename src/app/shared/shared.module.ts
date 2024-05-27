import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TableComponent } from './components/table/table.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    TableComponent
  ]
})
export class SharedModule { }
