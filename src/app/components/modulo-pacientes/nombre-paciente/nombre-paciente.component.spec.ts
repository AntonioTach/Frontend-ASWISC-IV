import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombrePacienteComponent } from './nombre-paciente.component';

describe('NombrePacienteComponent', () => {
  let component: NombrePacienteComponent;
  let fixture: ComponentFixture<NombrePacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NombrePacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NombrePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
