import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargarExpedienteComponent } from './descargar-expediente.component';

describe('DescargarExpedienteComponent', () => {
  let component: DescargarExpedienteComponent;
  let fixture: ComponentFixture<DescargarExpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescargarExpedienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescargarExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
