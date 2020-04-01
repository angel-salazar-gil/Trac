import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReporteI } from '../models/reporte.interface';

@Injectable({
	providedIn: 'root'
})
export class ReporteService {
	private reporteCollection: AngularFirestoreCollection<ReporteI>;
	private reporte: Observable<ReporteI>[];
	constructor(db: AngularFirestore) {
		this.reporteCollection = db.collection<ReporteI>('reportes');
		this.reporte = this.reporteCollection.snapshotChanges().pipe(
			map((actions) => {
				return actions.map((a) => {
					const data = a.payload.doc.data();
					const id = a.payload.doc.id;
					return { id, ...data };
				});
			})
		);
	}

	getReportes() {
		return this.reporte;
	}

	getReporte(id: string) {
		this.reporteCollection.doc<ReporteI>(id).valueChanges();
	}

	updateReporte(reporte: ReporteI, id: string) {
		return this.reporteCollection.doc(id).update(reporte);
	}

	addReporte(reporte: ReporteI) {
		return this.reporteCollection.add(reporte);
	}

	removeReporte(id: string) {
		return this.reporteCollection.doc(id).delete();
	}
}
