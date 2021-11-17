import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarPacienteComponent } from './revisar-paciente.component';

describe('RevisarPacienteComponent', () => {
  let component: RevisarPacienteComponent;
  let fixture: ComponentFixture<RevisarPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisarPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
