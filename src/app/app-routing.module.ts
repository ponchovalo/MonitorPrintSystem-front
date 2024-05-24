import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'printer',
    loadChildren: () => import('./printer/printer.module').then(m => m.PrinterModule)
  },
  {
    path: '**',
    redirectTo: 'printer/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
