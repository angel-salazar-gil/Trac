import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportePage } from './reporte.page';

import {AuthGuard} from "../../guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: ReportePage, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportePageRoutingModule {}
