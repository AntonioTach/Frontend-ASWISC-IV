import { TestBed } from '@angular/core/testing';

import {ServiceRegistroPacienteService} from './service-registro-paciente.service'

describe('ServiceRegistroPacienteService', () => {
    let service: ServiceRegistroPacienteService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(ServiceRegistroPacienteService);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });
  