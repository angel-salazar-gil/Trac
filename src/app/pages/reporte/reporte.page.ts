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
  moda: number;
  numModa: number;
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
    let contadorUno = 0;
    let contadorDos = 0;
    let contadorTres = 0;
    let contadorCuatro = 0;
    let contadorCinco = 0;
    let contadorSeis = 0;
    let contadorSiete = 0;
    let contadorOcho = 0;
    let contadorNueve = 0;
    let contadorDiez = 0;
    let contadorOnce = 0;
    let contadorDoce = 0;
    let contadorTrece = 0;
    let contadorCatorce = 0;
    let contadorQuince = 0;
    let contador16 = 0;
    let contador17 = 0;
    let contador18 = 0;
    let contador19 = 0;
    let contador20 = 0;
    let contador21 = 0;
    let contador22 = 0;
    let contador23 = 0;
    let contador24 = 0;

    


    this.fbService.getReportes().subscribe((res) => {
      res.forEach(item => {
        if (item.hora <= 12) {
          if (item.hora === 1) {
            contadorUno = contadorUno + 1;
          } else if (item.hora == 2) {
            contadorDos = contadorDos + 1;
          } else if (item.hora == 3) {
            contadorTres = contadorTres + 1;
          } else if (item.hora == 4) {
            contadorCuatro = contadorCuatro + 1;
          } else if (item.hora == 5) {
            contadorCinco = contadorCinco + 1;
          } else if (item.hora == 6) {
            contadorSeis = contadorSeis + 1;
          } else if (item.hora == 7) {

            contadorSiete = contadorSiete + 1;
            console.log(contadorSiete);
          } else if (item.hora == 8) {
            contadorOcho = contadorOcho + 1;
          } else if (item.hora == 9) {
            contadorNueve = contadorNueve + 1;
          } else if (item.hora == 10) {
            contadorDiez = contadorDiez + 1;
          } else if (item.hora == 11) {
            contadorOnce = contadorOnce + 1;
          } else if (item.hora == 12) {
            contadorDoce = contadorDoce + 1;
          }
          this.calculateSumDia(item.hora);
          contadorDia = contadorDia + 1;
        } else {
          if (item.hora == 13) {
           contadorTrece = contadorTrece + 1;
          } else if (item.hora == 14) {
            contadorCatorce = contadorCatorce + 1;
          } else if (item.hora == 15) {
            contadorQuince = contadorQuince + 1;
          } else if (item.hora == 16) {
            contador16 = contador16 + 1;
          } else if (item.hora == 17) {
            contador17 = contador17 + 1;
          } else if (item.hora == 18) {
            contador18 = contador18 + 1;
          } else if (item.hora == 19) {
            contador19 = contador19 + 1;
          } else if (item.hora == 20) {
            contador20 = contador20 + 1;
          } else if (item.hora == 21) {
            contador21 = contador21 + 1;
          } else if (item.hora == 22) {
            contador22 = contador22 + 1;
          } else if (item.hora == 23) {
            contador23 = contador23 + 1;
          } else if (item.hora == 24) {
            contador24 = contador24 + 1;
          }
          this.calculateSumNoche(item.hora);
          contadorNoche = contadorNoche + 1;
        }
        this.calculateSum(item.hora);
        contador = contador + 1;
      });
      console.log(contadorSiete);
      this.totalReportes = contador;
      this.totalReportesDia = contadorDia;
      this.totalReportesNoche = contadorNoche;
      this.calculateAverage(contador);
      this.calculateAverageDia(contadorDia);
      this.calculateAverageNoche(contadorNoche);
      this.calcularModa(
        contadorUno,
    contadorDos,
    contadorTres,
    contadorCuatro,
    contadorCinco,
    contadorSeis,
    contadorSiete,
    contadorOcho,
    contadorNueve,
    contadorDiez,
    contadorOnce,
    contadorDoce,
    contadorTrece,
    contadorCatorce,
    contadorQuince,
    contador16,
    contador17,
    contador18,
    contador19,
    contador20,
    contador21,
    contador22,
    contador23,
    contador24,
      );
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

  calcularModa(
    contadorUno,
    contadorDos,
    contadorTres,
    contadorCuatro,
    contadorCinco,
    contadorSeis,
    contadorSiete,
    contadorOcho,
    contadorNueve,
    contadorDiez,
    contadorOnce,
    contadorDoce,
    contadorTrece,
    contadorCatorce,
    contadorQuince,
    contador16,
    contador17,
    contador18,
    contador19,
    contador20,
    contador21,
    contador22,
    contador23,
    contador24,
  ) {
    this.moda = contadorUno;
    this.numModa = 1;

    if (this.moda < contadorDos) {
      this.numModa = 2;
      this.moda = contadorDos;
    }
    if (this.moda < contadorTres) {
      this.moda = contadorTres;
      this.numModa = 3;

    }
    if (this.moda < contadorCuatro) {
      this.moda = contadorCuatro;
      this.numModa = 4;
    }
    if (this.moda < contadorCinco) {
      this.moda = contadorCinco;
      this.numModa = 5;

    }
    if (this.moda < contadorSeis) {
      this.moda = contadorSeis;
      this.numModa = 6;

    }
    if (this.moda < contadorSiete) {
      this.moda = contadorSiete;
      this.numModa = 7;

    }
    if (this.moda < contadorOcho) {
      this.moda = contadorOcho;
      this.numModa = 8;

    }
    if (this.moda < contadorNueve) {
      this.moda = contadorNueve;
      this.numModa = 9;

    }
    if (this.moda < contadorDiez) {
      this.moda = contadorDiez;
      this.numModa = 10;

    }
    if (this.moda < contadorOnce) {
      this.moda = contadorOnce;
      this.numModa = 11;

    }
    if (this.moda < contadorDoce) {
      this.moda = contadorDoce;
      this.numModa = 12;

    }
    if (this.moda < contadorTrece) {
      this.moda = contadorTrece;
      this.numModa = 13;

    }
    if (this.moda < contadorCatorce) {
      this.moda = contadorCatorce;
      this.numModa = 14;

    }
    if (this.moda < contadorQuince) {
      this.moda = contadorQuince;
      this.numModa = 15;

    }
    if (this.moda < contador16) {
      this.moda = contador16;
      this.numModa = 16;

    }
    if (this.moda < contador17) {
      this.moda = contador17;
      this.numModa = 17;

    }
    if (this.moda < contador18) {
      this.moda = contador18;
      this.numModa = 18;

    }
    if (this.moda < contador19) {
      this.moda = contador19;
      this.numModa = 19;

    }
    if (this.moda < contador20) {
      this.moda = contador20;
      this.numModa = 20;

    }
    if (this.moda < contador21) {
      this.moda = contador21;
      this.numModa = 21;

    }
    if (this.moda < contador22) {
      this.moda = contador22;
      this.numModa = 22;

    }
    if (this.moda < contador23) {
      this.moda = contador23;
      this.numModa = 23;

    }
    if (this.moda < contador24) {
      this.moda = contador24;
      this.numModa = 24;

    }
    console.log(this.moda);
    console.log(this.numModa);
  }
}
