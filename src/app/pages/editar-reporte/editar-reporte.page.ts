import { Component, OnInit } from '@angular/core';
import {Reporte} from '../../model/Reporte';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { ToastController } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-reporte',
  templateUrl: './editar-reporte.page.html',
  styleUrls: ['./editar-reporte.page.scss'],
})
export class EditarReportePage implements OnInit {
  reporte: Reporte = {
    id: '',
    title: '',
    content: '',
    locationlat: '',
    locationlong: '',
    createdAt: ''
  };
  constructor(private activatedRoute: ActivatedRoute, private fbService: FirebaseService, private router: Router) { }

  ngOnInit() {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.fbService.getReporte(id).subscribe(noteData => {
        this.reporte = noteData;
      });
    }
  }
  actualizarReporte() {
    this.fbService.updateReporte(this.reporte).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Se ha actualizado con exito',
    });
      this.router.navigateByUrl('/reporte');
    }, err => {
      Swal.fire({
        icon: 'error',
        title: 'Ha ocurrido un error',
    });
    });
  }
}
