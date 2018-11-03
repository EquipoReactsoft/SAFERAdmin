import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioRutaComponent } from './horario-ruta.component';

describe('HorarioRutaComponent', () => {
  let component: HorarioRutaComponent;
  let fixture: ComponentFixture<HorarioRutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioRutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
