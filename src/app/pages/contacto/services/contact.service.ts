import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ContactMessage } from './contact-message';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // Collection with the model of the interface ContactMessage
  private messagesCollection: AngularFirestoreCollection<ContactMessage>;
  // Array to store all the messages
  mensajes: Observable<ContactMessage[]>;
  // Document
  mensajeDoc: AngularFirestoreDocument<ContactMessage>;

  constructor( private afs: AngularFirestore ) {
    this.messagesCollection = afs.collection<ContactMessage>('contact-messages');
    this.mensajes = this.messagesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ContactMessage;
        const id = a.payload.doc.id;
        return{ id, ...data};
      }))
    );
  }

  // Read all messages
  getContactMessages() {
    return this.mensajes;
  }

  // Create message
  createMessage(mensaje: ContactMessage) {
    this.messagesCollection.add(mensaje);
  }

  // Update
  updateMessage(mensaje: ContactMessage) {
    this.mensajeDoc = this.afs.doc(`contact-messages/${mensaje.id}`);
    this.mensajeDoc.update(mensaje);
  }

  // Delete
  deleteMessage(mensaje: ContactMessage) {
    this.mensajeDoc = this.afs.doc(`contact-messages/${mensaje.id}`);
    this.mensajeDoc.delete();
  }

}
