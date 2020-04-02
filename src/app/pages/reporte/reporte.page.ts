import { AfterViewInit,Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Observable } from 'rxjs';
import {Reporte} from '../../model/Reporte';
import { FirebaseService } from '../../servicios/firebase.service';
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.page.html',
  styleUrls: ['./reporte.page.scss'],
})
export class ReportePage implements OnInit {
ubicacion = null;
private reportes: Observable<Reporte[]>;
constructor(private geolocation: Geolocation, private fbService: FirebaseService) {}

  async ngOnInit() {
    const ubicacionInp: HTMLElement = document.getElementById('ubicacion');
    // obteniendo todos los reportes
    this.reportes = this.fbService.getReportes();
    this.fbService.getReportes().subscribe((res) => {
      console.log('Reporte', res);
    });
  }
}
