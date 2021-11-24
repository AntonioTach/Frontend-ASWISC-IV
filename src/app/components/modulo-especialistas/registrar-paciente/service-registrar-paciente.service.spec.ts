import { TestBed } from '@angular/core/testing';

import { ServiceRegistrarPacienteService } from './service-registrar-paciente.service';

describe('ServiceRegistrarPacienteService', () => {
  let service: ServiceRegistrarPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRegistrarPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
