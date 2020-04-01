import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ReporteI } from '../../models/reporte.interface';
import { ReporteService } from '../../services/reporte.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
	selector: 'app-reporte',
	templateUrl: './reporte.page.html',
	styleUrls: [ './reporte.page.scss' ]
})
export class ReportePage implements OnInit {
	ubicacion = null;
	reporte: ReporteI = {
		tipo: '',
		persona: '',
		desc: ''
	};
	reporteId = null;
	constructor(
		private geolocation: Geolocation,
		private route: ActivatedRoute,
		private nav: NavController,
		private reporteService: ReporteService,
		private loading: LoadingController
	) {}

	async ngOnInit() {
		const ubicacionInp: HTMLElement = document.getElementById('ubicacion');
		const rta = await this.geolocation.getCurrentPosition();
		console.log('la latitude es: ' + rta.coords.latitude + 'la longitud es:' + rta.coords.longitude);
		this.reporteId = this.route.snapshot.params['id'];
		/*this.reporteService.getReportes().subscribe((res) => {
			 Para un For
				res=> this.reporte = res;
			
			console.log('Reporte', res);
		});*/
	}
}
