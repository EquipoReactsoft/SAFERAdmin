import { Component, OnInit } from '@angular/core';
import { Unidad } from '../Models/unidad';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

declare const google: any;

@Component({
  selector: 'app-dashboard-real-time',
  templateUrl: './dashboard-real-time.component.html',
  styleUrls: ['./dashboard-real-time.component.scss']
})
export class DashboardRealTimeComponent implements OnInit {

  public units: Observable<any[]>;
  public currentUnit: Unidad;

  constructor(private db: AngularFireDatabase) {
    this.units = this.db.list('Unidades').snapshotChanges().pipe(
        map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }

  onShow(unit: Unidad) {
    this.currentUnit = unit;
    const myLatlng = new google.maps.LatLng(unit.latitud, unit.longitud);
    const mapOptions = {
        zoom: 13,
        center: myLatlng,
        scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
        styles: [{
            'featureType': 'water',
            'stylers': [{
                'saturation': 43
            }, {
                'lightness': -11
            }, {
                'hue': '#0088ff'
            }]
        }, {
            'featureType': 'road',
            'elementType': 'geometry.fill',
            'stylers': [{
                'hue': '#ff0000'
            }, {
                'saturation': -100
            }, {
                'lightness': 99
            }]
        }, {
            'featureType': 'road',
            'elementType': 'geometry.stroke',
            'stylers': [{
                'color': '#808080'
            }, {
                'lightness': 54
            }]
        }, {
            'featureType': 'landscape.man_made',
            'elementType': 'geometry.fill',
            'stylers': [{
                'color': '#ece2d9'
            }]
        }, {
            'featureType': 'poi.park',
            'elementType': 'geometry.fill',
            'stylers': [{
                'color': '#ccdca1'
            }]
        }, {
            'featureType': 'road',
            'elementType': 'labels.text.fill',
            'stylers': [{
                'color': '#767676'
            }]
        }, {
            'featureType': 'road',
            'elementType': 'labels.text.stroke',
            'stylers': [{
                'color': '#ffffff'
            }]
        }, {
            'featureType': 'poi',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {
            'featureType': 'landscape.natural',
            'elementType': 'geometry.fill',
            'stylers': [{
                'visibility': 'on'
            }, {
                'color': '#b8cb93'
            }]
        }, {
            'featureType': 'poi.park',
            'stylers': [{
                'visibility': 'on'
            }]
        }, {
            'featureType': 'poi.sports_complex',
            'stylers': [{
                'visibility': 'on'
            }]
        }, {
            'featureType': 'poi.medical',
            'stylers': [{
                'visibility': 'on'
            }]
        }, {
            'featureType': 'poi.business',
            'stylers': [{
                'visibility': 'simplified'
            }]
        }]

    };
    const mapa = new google.maps.Map(document.getElementById('map'), mapOptions);

    const marker = new google.maps.Marker({
        position: myLatlng,
        title: 'Hello World!'
    });

    // To add the marker to the map, call setMap();
    marker.setMap(mapa);
  }

  ngOnInit() {
    const myLatlng = new google.maps.LatLng(-12.1633, -76.9636);
    const mapOptions = {
        zoom: 13,
        center: myLatlng,
        scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
        styles: [{
            'featureType': 'water',
            'stylers': [{
                'saturation': 43
            }, {
                'lightness': -11
            }, {
                'hue': '#0088ff'
            }]
        }, {
            'featureType': 'road',
            'elementType': 'geometry.fill',
            'stylers': [{
                'hue': '#ff0000'
            }, {
                'saturation': -100
            }, {
                'lightness': 99
            }]
        }, {
            'featureType': 'road',
            'elementType': 'geometry.stroke',
            'stylers': [{
                'color': '#808080'
            }, {
                'lightness': 54
            }]
        }, {
            'featureType': 'landscape.man_made',
            'elementType': 'geometry.fill',
            'stylers': [{
                'color': '#ece2d9'
            }]
        }, {
            'featureType': 'poi.park',
            'elementType': 'geometry.fill',
            'stylers': [{
                'color': '#ccdca1'
            }]
        }, {
            'featureType': 'road',
            'elementType': 'labels.text.fill',
            'stylers': [{
                'color': '#767676'
            }]
        }, {
            'featureType': 'road',
            'elementType': 'labels.text.stroke',
            'stylers': [{
                'color': '#ffffff'
            }]
        }, {
            'featureType': 'poi',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {
            'featureType': 'landscape.natural',
            'elementType': 'geometry.fill',
            'stylers': [{
                'visibility': 'on'
            }, {
                'color': '#b8cb93'
            }]
        }, {
            'featureType': 'poi.park',
            'stylers': [{
                'visibility': 'on'
            }]
        }, {
            'featureType': 'poi.sports_complex',
            'stylers': [{
                'visibility': 'on'
            }]
        }, {
            'featureType': 'poi.medical',
            'stylers': [{
                'visibility': 'on'
            }]
        }, {
            'featureType': 'poi.business',
            'stylers': [{
                'visibility': 'simplified'
            }]
        }]

    };
    const mapa = new google.maps.Map(document.getElementById('map'), mapOptions);

    const marker = new google.maps.Marker({
        position: myLatlng,
        title: 'Hello World!'
    });

    // To add the marker to the map, call setMap();
    marker.setMap(mapa);
  }
}
