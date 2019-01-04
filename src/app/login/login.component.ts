import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../servicios/auth.service';
// import { FormGroup, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  // formLogin: FormGroup;
  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService ) { }

  ngOnInit() {
    // this.setForm();
    // this.LogIn();
  }

  onSubmitLogIn(): void {
    this.authService.LogIn(this.email, this.password)
    .then( (res) => {
      this.router.navigate(['/dashboard-real-time']);
    }).catch((err) => {
      console.log('err', err.message);
      this.router.navigate(['/login']);
    });
  }

  onLogout() {
    this.authService.LogOut();
  }

  // LogIn() {
  //   console.log('ghkgjgfhjgf');
  //   this.router.navigate(['/dashboard-real-time']);
  // }
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

  // setForm() {
  //   this.formLogin = new FormGroup({
  //     username: new FormControl(),
  //     password: new FormControl()
  //   });
  // }
}
