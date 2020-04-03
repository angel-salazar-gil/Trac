import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { NewMessageComponent } from './new-message/new-message.component';
import { ShowMessagesComponent } from './show-messages/show-messages.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [
        ContactService,
    ],
    exports: [
        NewMessageComponent,
        ShowMessagesComponent,
    ],
    declarations: [
        NewMessageComponent,
        ShowMessagesComponent,
    ],
})

export class ContactComponentsModule {}
