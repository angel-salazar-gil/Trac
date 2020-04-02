import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarReportePage } from './agregar-reporte.page';
import {AuthGuard} from "../../guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: AgregarReportePage
    , canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarReportePageRoutingModule {}
