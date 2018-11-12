import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'app/Models/login';
import { LoginService } from 'app/Services/login/login.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;

  constructor(public router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getLogin().subscribe(resp => {
      console.log(resp);
    });

  }

  singIn() {
    if (this.forma.invalid) {
      return;
    }
    this.loginService.getLogin(this.forma.value).subscribe(response => {
      if (response.valid) {
        this.router.navigate(['/horario']);
        this.router.navigate(['/dashboard']);
      }
    });
  }

  setForm() {
    this.forma = new FormGroup({
      usuario: new FormControl(Validators.required),
      password: new FormControl(Validators.required)
    });
  }

}
