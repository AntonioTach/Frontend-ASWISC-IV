import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosDePacientesComponent } from './pagos-de-pacientes.component';

describe('PagosDePacientesComponent', () => {
  let component: PagosDePacientesComponent;
  let fixture: ComponentFixture<PagosDePacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagosDePacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosDePacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
