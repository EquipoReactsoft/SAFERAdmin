import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRealTimeComponent } from './dashboard-real-time.component';

describe('DashboardRealTimeComponent', () => {
  let component: DashboardRealTimeComponent;
  let fixture: ComponentFixture<DashboardRealTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRealTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRealTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
