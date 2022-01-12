import { TestBed } from '@angular/core/testing';

import { NombrePacienteService } from './nombre-paciente.service';

describe('NombrePacienteService', () => {
  let service: NombrePacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NombrePacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
