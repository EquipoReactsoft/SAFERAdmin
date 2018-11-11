import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss']
})
export class HorarioComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  submit() {
    //  alert('dsdsd');
    this.router.navigate(['/horario-ruta']);
  }

}
