import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    PanelModule,
    AvatarModule
  ],
  exports: [
    CardModule,
    PanelModule,
    AvatarModule
  ]
})
export class PrimeNgModule { }
