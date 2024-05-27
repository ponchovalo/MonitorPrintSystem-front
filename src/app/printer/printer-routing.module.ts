import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrinterLayoutComponent } from './layouts/printer-layout/printer-layout.component';
import { PrinterDashboardComponent } from './pages/printer-dashboard/printer-dashboard.component';
import { PrintersListComponent } from './pages/printers-list/printers-list.component';
import { PrinterModelListComponent } from './pages/printer-model-list/printer-model-list.component';

const routes: Routes = [
  {
    path: '',
    component: PrinterLayoutComponent,
    children: [
      { path: 'dashboard', component: PrinterDashboardComponent },
      { path: 'printers-list', component: PrintersListComponent },
      { path: 'models-list', component: PrinterModelListComponent },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrinterRoutingModule { }
