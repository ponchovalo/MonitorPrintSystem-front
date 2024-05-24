import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrinterRoutingModule } from './printer-routing.module';
import { PrinterLayoutComponent } from './layouts/printer-layout/printer-layout.component';
import { PrinterDashboardComponent } from './pages/printer-dashboard/printer-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    PrinterLayoutComponent,
    PrinterDashboardComponent
  ],
  imports: [
    CommonModule,
    PrinterRoutingModule,
    SharedModule,
    PrimeNgModule
  ]
})
export class PrinterModule { }
