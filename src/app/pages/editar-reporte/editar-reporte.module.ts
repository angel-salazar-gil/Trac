import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarReportePageRoutingModule } from './editar-reporte-routing.module';

import { EditarReportePage } from './editar-reporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarReportePageRoutingModule
  ],
  declarations: [EditarReportePage]
})
export class EditarReportePageModule {}
