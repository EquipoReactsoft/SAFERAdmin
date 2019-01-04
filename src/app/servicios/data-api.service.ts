import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
// import { Observable} from 'rxjs/internal/Observable';
import { HttpClient} from '@angular/common/http'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Reporte } from 'app/Models/reporte';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  private _url: 'https://safer-a75f0.firebaseio.com/Reporte.json';
  // reportesRef$: AngularFireList<any[]>;    // Reference to Student data list, its an Observable

  // constructor(private db: AngularFireDatabase) { }
  constructor(private http: HttpClient) { }

  // Fetch Reportes List
  GetReportesList(): Observable<Reporte[]> {
    // this.reportesRef$ = this.db.list('/Reporte');
    // return this.reportesRef$;
    return this.http.get<Reporte[]>(this._url);
  }


}
