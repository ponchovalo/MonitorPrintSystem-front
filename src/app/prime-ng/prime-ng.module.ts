import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { RadioButtonModule } from 'primeng/radiobutton';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    PanelModule,
    AvatarModule,
    ButtonModule,
    FloatLabelModule,
    InputTextModule,
    DropdownModule,
    TableModule,
    RadioButtonModule
  ],
  exports: [
    CardModule,
    PanelModule,
    AvatarModule,
    ChartModule,
    ButtonModule,
    FloatLabelModule,
    InputTextModule,
    DropdownModule,
    TableModule,
    RadioButtonModule
  ]
})
export class PrimeNgModule { }
