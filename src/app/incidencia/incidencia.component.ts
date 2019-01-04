import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../servicios/data-api.service';
import { Reporte } from '../Models/reporte';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { element } from '@angular/core/src/render3';

declare const google: any;
@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.scss']
})
export class IncidenciaComponent implements OnInit {
  public reports: Observable<any[]>;
  public comentario: string;
  public currentReport: Reporte;
  // reportesRef$: AngularFireList<any[]>;

  constructor(private db: AngularFireDatabase) {
    console.log('Reporte');

    this.reports = this.db.list('Reporte').snapshotChanges().pipe(
        map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }

  reportDate(longTime) {
      const d = new Date(longTime.time);
      let month = '' + (d.getMonth() + 1);
      let day = '' + d.getDate();
      const year = d.getFullYear();
      if (month.length < 2) {
        month = '0' + month;
      }
        if (day.length < 2) {
            day = '0' + day;
        }

    return [day, month, year].join('/');
  }

  reportEstado(estado: Boolean) {
      let est: string;
      if (estado) {
        est = 'Verificado';
      } else {
        est = 'Reportado';
      }
    return est.toString();
  }

  showDetalle(report) {
      console.log(report.comentario)
  }

  onShow(report: Reporte) {
    this.currentReport = report;
    const myLatlng = new google.maps.LatLng(report.latitud, report.longitud);
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
    // this.service.GetReportesList()
    //     .subscribe(data => {
    //         this.report = data;
    //     })
    // this.reportesRef$ = this.db.list('/Reporte');
    // this.db.GetReportesList()

//     const myLatlng = new google.maps.LatLng(-12.1616501, -76.9727671);
//     const mapOptions = {
//         zoom: 13,
//         center: myLatlng,
//         scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
//         styles: [{
//             'featureType': 'water',
//             'stylers': [{
//                 'saturation': 43
//             }, {
//                 'lightness': -11
//             }, {
//                 'hue': '#0088ff'
//             }]
//         }, {
//             'featureType': 'road',
//             'elementType': 'geometry.fill',
//             'stylers': [{
//                 'hue': '#ff0000'
//             }, {
//                 'saturation': -100
//             }, {
//                 'lightness': 99
//             }]
//         }, {
//             'featureType': 'road',
//             'elementType': 'geometry.stroke',
//             'stylers': [{
//                 'color': '#808080'
//             }, {
//                 'lightness': 54
//             }]
//         }, {
//             'featureType': 'landscape.man_made',
//             'elementType': 'geometry.fill',
//             'stylers': [{
//                 'color': '#ece2d9'
//             }]
//         }, {
//             'featureType': 'poi.park',
//             'elementType': 'geometry.fill',
//             'stylers': [{
//                 'color': '#ccdca1'
//             }]
//         }, {
//             'featureType': 'road',
//             'elementType': 'labels.text.fill',
//             'stylers': [{
//                 'color': '#767676'
//             }]
//         }, {
//             'featureType': 'road',
//             'elementType': 'labels.text.stroke',
//             'stylers': [{
//                 'color': '#ffffff'
//             }]
//         }, {
//             'featureType': 'poi',
//             'stylers': [{
//                 'visibility': 'off'
//             }]
//         }, {
//             'featureType': 'landscape.natural',
//             'elementType': 'geometry.fill',
//             'stylers': [{
//                 'visibility': 'on'
//             }, {
//                 'color': '#b8cb93'
//             }]
//         }, {
//             'featureType': 'poi.park',
//             'stylers': [{
//                 'visibility': 'on'
//             }]
//         }, {
//             'featureType': 'poi.sports_complex',
//             'stylers': [{
//                 'visibility': 'on'
//             }]
//         }, {
//             'featureType': 'poi.medical',
//             'stylers': [{
//                 'visibility': 'on'
//             }]
//         }, {
//             'featureType': 'poi.business',
//             'stylers': [{
//                 'visibility': 'simplified'
//             }]
//         }]

//     };
//     const mapa = new google.maps.Map(document.getElementById('map'), mapOptions);

//     const marker = new google.maps.Marker({
//         position: myLatlng,
//         title: 'Hello World!'
//     });

//     // To add the marker to the map, call setMap();
//     marker.setMap(mapa);
    }

}
