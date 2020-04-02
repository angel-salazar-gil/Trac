import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarReportePageRoutingModule } from './agregar-reporte-routing.module';

import { AgregarReportePage } from './agregar-reporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarReportePageRoutingModule
  ],
  declarations: [AgregarReportePage]
})
export class AgregarReportePageModule {}
