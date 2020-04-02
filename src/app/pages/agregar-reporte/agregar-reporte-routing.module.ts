import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarReportePage } from './agregar-reporte.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarReportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarReportePageRoutingModule {}
