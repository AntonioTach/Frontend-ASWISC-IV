import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPacientesComponent } from './navbar-pacientes.component';

describe('NavbarPacientesComponent', () => {
  let component: NavbarPacientesComponent;
  let fixture: ComponentFixture<NavbarPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
