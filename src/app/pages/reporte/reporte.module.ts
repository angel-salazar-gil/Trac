import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportePageRoutingModule } from './reporte-routing.module';

import { ReportePage } from './reporte.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
	imports: [ CommonModule, FormsModule, IonicModule, ReportePageRoutingModule, ComponentsModule ],
	declarations: [ ReportePage ]
})
export class ReportePageModule {}
