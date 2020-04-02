import { AfterViewInit,Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Observable } from 'rxjs';
import {Reporte} from '../../model/Reporte';
import { FirebaseService } from '../../servicios/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ver-reporte',
  templateUrl: './ver-reporte.page.html',
  styleUrls: ['./ver-reporte.page.scss'],
})
export class VerReportePage implements OnInit {
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
  deleteReporte() {
    this.fbService.deleteReporte(this.reporte.id).then(() => {
      this.router.navigateByUrl('/');
    }, err => {
    });
  }
}
