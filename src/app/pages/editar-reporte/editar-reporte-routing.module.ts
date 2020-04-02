import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarReportePage } from './editar-reporte.page';
import {AuthGuard} from "../../guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: EditarReportePage, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarReportePageRoutingModule {}
