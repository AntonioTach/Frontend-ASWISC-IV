import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementosDeTerapiaPacientesComponent } from './elementos-de-terapia-pacientes.component';

describe('ElementosDeTerapiaPacientesComponent', () => {
  let component: ElementosDeTerapiaPacientesComponent;
  let fixture: ComponentFixture<ElementosDeTerapiaPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementosDeTerapiaPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementosDeTerapiaPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
