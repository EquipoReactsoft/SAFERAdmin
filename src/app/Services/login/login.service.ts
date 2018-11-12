import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Login } from 'app/Models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginCollection: AngularFirestoreCollection<Login>;
  login: Observable<Login[]>;
  loginDoc: AngularFirestoreDocument<Login>;

  constructor(public firebase: AngularFirestore) {
    this.login = firebase.collection('Login').valueChanges();
  }

  getLogin(usuario: any) {
    this.login.forEach(element => {
      // TODO: Validar si el usuario existe en la firebase
    });
    return this.login;
  }

}
