import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
	selector: 'app-reporte',
	templateUrl: './reporte.page.html',
	styleUrls: [ './reporte.page.scss' ]
})
export class ReportePage implements OnInit {
	ubicacion = null;
	constructor(private geolocation: Geolocation) {}

	async ngOnInit() {
		const ubicacionInp: HTMLElement = document.getElementById('ubicacion');
		const rta = await this.geolocation.getCurrentPosition();
		console.log('la latitude es: ' + rta.coords.latitude + 'la longitud es:' + rta.coords.longitude);
	}
}
