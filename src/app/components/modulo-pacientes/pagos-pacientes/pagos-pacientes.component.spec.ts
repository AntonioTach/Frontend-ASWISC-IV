import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosPacientesComponent } from './pagos-pacientes.component';

describe('PagosPacientesComponent', () => {
  let component: PagosPacientesComponent;
  let fixture: ComponentFixture<PagosPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagosPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
