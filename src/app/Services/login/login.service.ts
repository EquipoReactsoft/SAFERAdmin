import { element } from 'protractor';
import { Usuario } from './../../Models/usuario';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Login } from 'app/Models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginCollection: AngularFirestoreCollection<Login>;
  usuario: Usuario[];
  loginDoc: AngularFirestoreDocument<Login>;

  constructor(public firebase: AngularFirestore) {
    firebase.collection<Usuario>('usuarios').valueChanges().subscribe((res) => {
        if (res) {
          this.usuario = res;
        }
    });
  }

  singInService(user: String, pass: String): Boolean {
    this.usuario.forEach(item => {
        if (item.name === user  && item.password === pass) {
          return true;
        }
    });
    return false;
  }

}
