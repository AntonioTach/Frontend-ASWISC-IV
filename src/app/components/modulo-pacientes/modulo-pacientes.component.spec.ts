import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloPacientesComponent } from './modulo-pacientes.component';

describe('ModuloPacientesComponent', () => {
  let component: ModuloPacientesComponent;
  let fixture: ComponentFixture<ModuloPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
