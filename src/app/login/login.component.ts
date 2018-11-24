import { Usuario } from './../Models/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/Services/login/login.service';
import { FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(public router: Router, private loginService: LoginService) { }

  ngOnInit() {
    // this.setForm();
    // this.LogIn();
  }

  LogIn() {
    console.log('ghkgjgfhjgf');
    this.router.navigate(['/horario']);
  }

  // singIn() {
  //   if (this.forma.valid ) {
  //     console.log('Heree');
  //     return;
  //   } else {
  //     console.log('bach');
  //   }
  //   this.loginService.singInService().subscribe(response => {
  //     if (response) {
  //       this.router.navigate(['/horario']);
  //     }
  //   });
  //   console.log(this.formLogin);
  // }

  setForm() {
    this.formLogin = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }
}
