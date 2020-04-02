import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ContactMessage } from './contact-message';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private messagesCollection: AngularFirestoreCollection<ContactMessage>;

  constructor( private afs: AngularFirestore ) {
    this.messagesCollection = afs.collection<ContactMessage>('contact-messages');
  }

  // Create
  createMessage(newMessage: ContactMessage) {
    return this.messagesCollection.add(newMessage);
  }

  // Read all messages
  getMessages() {
    return this.messagesCollection.snapshotChanges();
  }

}
