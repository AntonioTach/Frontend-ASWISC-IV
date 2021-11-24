import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedientePacientesComponent } from './expediente-pacientes.component';

describe('ExpedientePacientesComponent', () => {
  let component: ExpedientePacientesComponent;
  let fixture: ComponentFixture<ExpedientePacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpedientePacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpedientePacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
