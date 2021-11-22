import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionExpedienteComponent } from './modificacion-expediente.component';

describe('ModificacionExpedienteComponent', () => {
  let component: ModificacionExpedienteComponent;
  let fixture: ComponentFixture<ModificacionExpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificacionExpedienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificacionExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
