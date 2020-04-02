// tslint:disable: indent

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
  someValue: number;
  totalReportes: number;
  totalReportesDia: number;
  totalReportesNoche: number;
  horaPromedio: number;
  horaPromedioDia: number;
  horaPromedioNoche: number;

  hora = 0;
  horaDia = 0;
  horaNoche = 0;

ubicacion = null;

private reportes: Observable<Reporte[]>;
constructor(private geolocation: Geolocation, private fbService: FirebaseService) {}

  async ngOnInit() {
    const ubicacionInp: HTMLElement = document.getElementById('ubicacion');
    // obteniendo todos los reportes
    this.reportes = this.fbService.getReportes();
    let contador = 0;
    let contadorDia = 0;
    let contadorNoche = 0;

    this.fbService.getReportes().subscribe((res) => {
      res.forEach(item => {
        if (item.hora <= 12) {
          this.calculateSumDia(item.hora);
          contadorDia = contadorDia + 1;
        } else {
          this.calculateSumNoche(item.hora);
          contadorNoche = contadorNoche + 1;
        }
        this.calculateSum(item.hora);
        contador = contador + 1;
      });
      this.totalReportes = contador;
      this.totalReportesDia = contadorDia;
      this.totalReportesNoche = contadorNoche;
      this.calculateAverage(contador);
      this.calculateAverageDia(contadorDia);
      this.calculateAverageNoche(contadorNoche);


    });


  }
  calculateSum(value) {
    this.hora = (Number(value) + Number(this.hora));
    //console.log(this.hora);
  }

  calculateAverage(count) {
    this.horaPromedio = (Number(this.hora) / Number(count));
    // console.log(this.horaPromedioDia);
  }
  calculateSumDia(value2) {
    this.horaDia = (Number(value2) + Number(this.horaDia));
    // console.log(this.horaDia);
  }

  calculateAverageDia(count2) {
    console.log(count2);
    console.log(this.horaDia);
    this.horaPromedioDia = (Number(this.horaDia) / Number(count2));
    console.log(this.horaPromedioDia);
  }
  calculateSumNoche(value3) {
    
    this.horaNoche = (Number(value3) + Number(this.horaNoche));
    // console.log(this.horaNoche);
  }

  calculateAverageNoche(count3) {
    this.horaPromedioNoche = (Number(this.horaNoche) / Number(count3));
    // console.log(this.horaPromedioNoche);
  }
}
