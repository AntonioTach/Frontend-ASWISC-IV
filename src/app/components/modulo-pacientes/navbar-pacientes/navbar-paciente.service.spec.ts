import { TestBed } from '@angular/core/testing';

import { NavbarPacienteService } from './navbar-paciente.service';

describe('NavbarPacienteService', () => {
  let service: NavbarPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
