import { Component, OnInit } from '@angular/core';
import { ContactMessage } from '../../services/contact-message';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-show-messages',
  templateUrl: './show-messages.component.html',
  styleUrls: ['./show-messages.component.scss'],
})
export class ShowMessagesComponent implements OnInit {
  campos = [
    {
      nombre: 'Nombre',
      correo: 'Correo',
      mensaje: 'Mensaje'
    }
  ];
  // Array para almacenar todos los mensajes en firebase
  mensajes: ContactMessage[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContactMessages().subscribe(messages => {
      this.mensajes = messages;
    });
  }

  updateMessage(message: ContactMessage) {
    this.contactService.updateMessage(message);
  }

  deleteMessage(event, mensaje: ContactMessage) {
    this.contactService.deleteMessage(mensaje);
  }

}
