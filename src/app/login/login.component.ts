import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'app/Models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginex: Login[];

  constructor(public router: Router) { }

  ngOnInit() {
    const login = new Login();
    login.usuarios = 'ssss';
    login.password = '123456';

    const login2 = new Login();
    login2.usuarios = 'sseeess';
    login2.password = '1234eee56';

    this.loginex.push(login);
    // this.loginex.push(login2);

  }

  submit() {
    //  alert('dsdsd');
    this.router.navigate(['/horario']);
  }

}
