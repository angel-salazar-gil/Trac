import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidePage } from './slide.page';
import {AuthGuard} from "../../guards/auth.guard";


const routes: Routes = [
  {
    path: '',
    component: SlidePage, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlidePageRoutingModule {}
