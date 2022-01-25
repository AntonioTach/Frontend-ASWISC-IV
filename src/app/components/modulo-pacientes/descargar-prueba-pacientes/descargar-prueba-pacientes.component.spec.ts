import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargarPruebaPacientesComponent } from './descargar-prueba-pacientes.component';

describe('DescargarPruebaPacientesComponent', () => {
  let component: DescargarPruebaPacientesComponent;
  let fixture: ComponentFixture<DescargarPruebaPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescargarPruebaPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescargarPruebaPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
