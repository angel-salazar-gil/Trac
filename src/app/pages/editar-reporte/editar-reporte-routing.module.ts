import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarReportePage } from './editar-reporte.page';

const routes: Routes = [
  {
    path: '',
    component: EditarReportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarReportePageRoutingModule {}
