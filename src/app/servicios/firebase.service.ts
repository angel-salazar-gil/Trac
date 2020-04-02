import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Reporte } from '../model/Reporte';
import {map, take} from 'rxjs/operators';
import { notEqual } from 'assert';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private reportes: Observable<Reporte[]>;
  private reportesCollection: AngularFirestoreCollection<Reporte>;
  constructor(private afs: AngularFirestore) {
    this.reportesCollection = this.afs.collection<Reporte>('reportes');
    this.reportes = this.reportesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
   }
   // getting all notes
   getReportes(): Observable<Reporte[]> {
     return this.reportes;
   }
   // getting single reporte
   getReporte(id: string): Observable<Reporte>{
     return this.reportesCollection.doc<Reporte>(id).valueChanges().pipe(
       take(1),
       map(reportes => {
        reportes.id = id;
        return reportes;
       })
     );
   }
   // create new reporte
   addReporte(reporte: Reporte): Promise<DocumentReference> {
     return this.reportesCollection.add(reporte);
   }
   // update reporte
   updateReporte(reporte: Reporte): Promise<void>{
    return this.reportesCollection.doc(reporte.id).update({title: reporte.title, content: reporte.content});
   }
   deleteReporte(id: string): Promise<void>{
     return this.reportesCollection.doc(id).delete();
   }
  }

