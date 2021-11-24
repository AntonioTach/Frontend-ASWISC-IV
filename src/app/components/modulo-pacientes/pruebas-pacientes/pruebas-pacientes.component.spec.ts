import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasPacientesComponent } from './pruebas-pacientes.component';

describe('PruebasPacientesComponent', () => {
  let component: PruebasPacientesComponent;
  let fixture: ComponentFixture<PruebasPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebasPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebasPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
