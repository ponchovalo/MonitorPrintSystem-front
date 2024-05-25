import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrinterRoutingModule } from './printer-routing.module';
import { PrinterLayoutComponent } from './layouts/printer-layout/printer-layout.component';
import { PrinterDashboardComponent } from './pages/printer-dashboard/printer-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PrinterCardDetailComponent } from './components/printer-card-detail/printer-card-detail.component';


@NgModule({
  declarations: [
    PrinterLayoutComponent,
    PrinterDashboardComponent,
    PrinterCardDetailComponent
  ],
  imports: [
    CommonModule,
    PrinterRoutingModule,
    SharedModule,
    PrimeNgModule
  ]
})
export class PrinterModule { }
