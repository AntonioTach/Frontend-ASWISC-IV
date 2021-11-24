import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaPacientesComponent } from './baja-pacientes.component';

describe('BajaPacientesComponent', () => {
  let component: BajaPacientesComponent;
  let fixture: ComponentFixture<BajaPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
