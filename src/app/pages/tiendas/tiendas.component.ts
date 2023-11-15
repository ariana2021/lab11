import { Component } from '@angular/core';

interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  };
  label: {
    color: string;
    text: string;
    fontSize: string;
    fontWeight: string;
  };
  title: string;
  info: string;
}

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css'],
})
export class TiendasComponent {
  mapOptions: google.maps.MapOptions = {
    center: { lat: -12.03581, lng: -76.958392 },
    zoom: 15,
    mapTypeControl: false,
  };

  markers: MarkerProperties[] = [
    //Tiendas en Santa Anita
    {
      position: { lat: -12.04770271636474, lng: -76.95803820636442 },
      label: {
        color: 'black',
        text: 'Tienda en Santa Anita N°1',
        fontSize: '20px',
        fontWeight: 'bold',
      },
      title: 'ciudad',
      info: 'Lima - Santa Anita',
    },
    {
      position: { lat: -12.048036074675831, lng: -76.95720495951942 },
      label: {
        color: 'black',
        text: 'Tienda en Santa Anita N°2',
        fontSize: '20px',
        fontWeight: 'bold',
      },
      title: 'ciudad',
      info: 'Lima - Santa Anita',
    },

    {
      position: { lat: -12.0376863363061, lng: -76.96423601084122 },
      label: {
        color: 'black',
        text: 'Tienda en Santa Anita N°3',
        fontSize: '20px',
        fontWeight: 'bold',
      },
      title: 'ciudad',
      info: 'Lima - Santa Anita',
    },

    //Tiendas en San Miguel
    {
      position: { lat: -12.077922456269832, lng: -77.09277766160139 },
      label: {
        color: 'black',
        text: 'Tienda en San Miguel N°1',
        fontSize: '20px',
        fontWeight: 'bold',
      },
      title: 'ciudad',
      info: 'Lima',
    },

    {
      position: { lat: -12.082837431574422, lng: -77.09445931410369 },
      label: {
        color: 'black',
        text: 'Tienda en San Miguel N°2',
        fontSize: '20px',
        fontWeight: 'bold',
      },
      title: 'ciudad',
      info: 'Lima',
    },

    //Tiendas en San Isidro
    {
      position: { lat: -12.097976718778753, lng: -77.03204063536565 },
      label: {
        color: 'black',
        text: 'Tienda en Surco N°1',
        fontSize: '20px',
        fontWeight: 'bold',
      },
      title: 'ciudad',
      info: 'Lima',
    },

    {
      position: { lat: -12.097529644963194, lng: -77.0364397194968 },
      label: {
        color: 'black',
        text: 'Tienda en Surco N°2',
        fontSize: '20px',
        fontWeight: 'bold',
      },
      title: 'ciudad',
      info: 'Lima',
    },
  ];

  handleMapInitialized(map: google.maps.Map) {
    this.markers.forEach((marker: MarkerProperties) => {
      new google.maps.Marker({
        position: marker.position,
        label: marker.label,
        map,
      });
    });
  }

  verTiendas(distrito: string) {
    if ((distrito = 'Santa Anita')) {
      this.verSantaAnita();
    }
    if ((distrito = 'San Miguel')) {
      this.verSanMiguel();
    }
    if ((distrito = 'San Isidro')) {
      this.verSanIsidro();
    }
  }

  verSantaAnita() {}

  verSanMiguel() {}

  verSanIsidro() {}
}
