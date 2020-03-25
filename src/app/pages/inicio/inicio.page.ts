import { Component, OnInit } from '@angular/core';
declare var google;
interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  map = null;
  markers: Marker[] = [
    {
      position: {
        lat: 21.161669,
        lng:  -86.851417
      },
      title: 'Cancún'
    },
    {
      position: {
        lat: 21.1319948,
        lng: -86.8560091,
      },
      title: 'Casa Edgar'
    },
    {
      position: {
        lat: 21.1433426,
        lng: -86.8405372,
      },
      title: 'Parque Urbano Kabah'
    },
  ];
  constructor() { }

  ngOnInit() {
    this.loadMap();
  }
  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: 21.161669, lng:  -86.851417};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.renderMarkers();
    });
  }
  renderMarkers() {
    this.markers.forEach(marker => {
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
}
