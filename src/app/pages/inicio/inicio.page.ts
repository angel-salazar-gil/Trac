import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;
interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

interface Components {
  icon: string;
  name: string;
  redirectTo: string;
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
        lat: 21.1433426,
        lng: -86.8405372,
      },
      title: 'Parque Urbano Kabah'
    },
  ];

  components: Components[] = [
    {
      icon: 'map',
      name: 'Mapa',
      redirectTo: '/inicio' 
    },
    {
      icon: 'call',
      name: 'Contacto',
      redirectTo: '/contacto'
    },
    {
      icon: 'clipboard',
      name: 'Reporte',
      redirectTo: '/inicio'
    }
  ];

  constructor(
    private geolocation: Geolocation
  ) { }

  ngOnInit() {
    this.loadMap();
  }
  async loadMap() {
    const rta = await this.geolocation.getCurrentPosition();
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: rta.coords.latitude, lng:  rta.coords.longitude};
    // create map
    
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 15
    });
    google.maps.event.addListenerOnce(this.map, 'idle', async () => {
      mapEle.classList.add('show-map');
      const marker = {
        position: {
          lat: rta.coords.latitude,
          lng:  rta.coords.longitude
        },
        title: 'Casa Edgar'
      };
      this.addMarker(marker);

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
