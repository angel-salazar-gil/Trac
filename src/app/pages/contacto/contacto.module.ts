import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactoPageRoutingModule } from './contacto-routing.module';

import { ContactoPage } from './contacto.page';
import { ContactService } from './services/contact.service';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ContactoPageRoutingModule,
		ReactiveFormsModule,
		ComponentsModule
	],
	providers: [ ContactService ],
	declarations: [ ContactoPage ]
})
export class ContactoPageModule {}
