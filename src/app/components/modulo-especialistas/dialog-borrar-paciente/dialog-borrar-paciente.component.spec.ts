import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBorrarPacienteComponent } from './dialog-borrar-paciente.component';

describe('DialogBorrarPacienteComponent', () => {
  let component: DialogBorrarPacienteComponent;
  let fixture: ComponentFixture<DialogBorrarPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBorrarPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBorrarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
