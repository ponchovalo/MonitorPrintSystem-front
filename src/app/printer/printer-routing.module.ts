import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrinterLayoutComponent } from './layouts/printer-layout/printer-layout.component';
import { PrinterDashboardComponent } from './pages/printer-dashboard/printer-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PrinterLayoutComponent,
    children: [
      { path: 'dashboard', component: PrinterDashboardComponent },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrinterRoutingModule { }
