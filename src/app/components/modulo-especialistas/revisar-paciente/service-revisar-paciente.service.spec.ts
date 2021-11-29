import { TestBed } from '@angular/core/testing';

import { ServiceRevisarPacienteService } from './service-revisar-paciente.service';

describe('ServiceRevisarPacienteService', () => {
  let service: ServiceRevisarPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRevisarPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
