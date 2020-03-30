// tslint:disable: indent

import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;
interface Marker {
	position: {
		lat: number;
		lng: number;
	};
	title: string;
}

interface Components {
	icon: string;
	name: string;
	redirectTo: string;
}
@Component({
  selector: 'app-provider',
  templateUrl: './provider.page.html',
  styleUrls: ['./provider.page.scss'],
})
export class ProviderPage implements OnInit {

  map = null;
	markers: Marker[] = [
		{
			position: {
				lat: 21.1433426,
				lng: -86.8405372
			},
			title: 'Parque Urbano Kabah'
		}
	];

	constructor() {}

	ngOnInit() {
		this.loadMap();
	}
	async loadMap() {
		const myLatLng = { lat: 21.1433426, lng: -86.851417 };

		// create a new map by passing HTMLElement
		const mapEle: HTMLElement = document.getElementById('map');
		// create LatLng object
		// create map
		this.map = new google.maps.Map(mapEle, {
			center: myLatLng,
			zoom: 15
		});
		// tslint:disable-next-line: only-arrow-functions
		google.maps.event.addListenerOnce(this.map, 'idle', async () => {
			mapEle.classList.add('show-map');
			const marker = {
				position: {
					lat: 21.1433426,
					lng: -86.851417
				},
				title: 'Cancún'
			};
			this.addMarker(marker);
			this.renderMarkers();
		});
		this.map.addListener('click', event => {

			const marker = {
				position: event.latLng,
				title: 'Cancún'
			};
			console.log('hola' + event.latLng);
			this.addMarker(marker);
		  });
	}

	renderMarkers() {
		this.markers.forEach((marker) => {
			this.addMarker(marker);
		});
	}
	addMarker(marker: Marker) {
		return new google.maps.Marker({
			position: marker.position,
			map: this.map,
			title: marker.title
		});
	}
	limpiar() {
		this.map.clear();
		this.map.off();
		this.map.trigger('test');
	}
}

