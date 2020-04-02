import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerReportePage } from './ver-reporte.page';
import {AuthGuard} from "../../guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: VerReportePage, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerReportePageRoutingModule {}
