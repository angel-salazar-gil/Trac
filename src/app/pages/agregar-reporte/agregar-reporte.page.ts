import { Component, OnInit } from '@angular/core';
import {Reporte} from '../../model/Reporte';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { ToastController, Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import Swal from 'sweetalert2';
import * as firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyDmO2szwVzejxOlt9kob3GwEgPqLUzyWqE',
  authDomain: 'trac-cc410.firebaseapp.com',
  databaseURL: 'https://trac-cc410.firebaseio.com',
  projectId: 'trac-cc410',
  storageBucket: 'trac-cc410.appspot.com',
};
// firebase.initializeApp(config);
@Component({
  selector: 'app-agregar-reporte',
  templateUrl: './agregar-reporte.page.html',
  styleUrls: ['./agregar-reporte.page.scss'],
})
export class AgregarReportePage implements OnInit {
  reporte: Reporte = {
    title: '',
    content: '',
    fecha: '',
    hora: '',
    locationlat: '',
    locationlong: '',
    createdAt: new Date().getTime()
  };
  // miarray: string[] = ['lunes', 'martes', 'miercoles' , 'jueves' , 'viernes', 'sabado', 'domingo'];

  constructor(
    public platform: Platform,
    private geolocation: Geolocation,
    private activatedRoute: ActivatedRoute,
    private fbService: FirebaseService,
    private toastCtrl: ToastController,
    private router: Router
  ) {
    
   }
   InsertData(){
    // tslint:disable-next-line: new-parens
    // let estatus = new Object();
    // tslint:disable-next-line: prefer-const
    var estatus = new Object();
    // tslint:disable-next-line: label-position
    estatus = {
      status: 1,
    };
    var rootRef = firebase.database().ref();
    var child = rootRef.child('/estatus');
    // var childRef = child.push();
    var childRef2 = child.update(estatus);

    // childRef.set('status');
   }
  async ngOnInit() {

    /*
    for (const dia of this.miarray) {
      console.log(dia);
    }*/

    const rta = await this.geolocation.getCurrentPosition();
    // tslint:disable-next-line: no-unused-expression
    this.reporte.locationlat = rta.coords.latitude;
    this.reporte.locationlong = rta.coords.longitude;

  }
  agregarReporte(){
    this.fbService.addReporte(this.reporte).then(() => {
      this.platform.ready().then(() => {
        this.InsertData();
        });
      Swal.fire({
        icon: 'success',
        title: 'Se ha guardado con exito',
    });
      this.router.navigateByUrl('/');
    }, err => {
    });
  }
}
