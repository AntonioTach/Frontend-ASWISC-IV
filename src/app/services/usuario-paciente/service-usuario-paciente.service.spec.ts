import { TestBed } from '@angular/core/testing';

import { ServiceUsuarioPacienteService } from './service-usuario-paciente.service';

describe('ServiceUsuarioPacienteService', () => {
  let service: ServiceUsuarioPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUsuarioPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
