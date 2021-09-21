import { TestBed } from '@angular/core/testing';

import { ServiceRegistroEspecialistaService } from './service-registro-especialista.service';

describe('ServiceRegistroEspecialistaService', () => {
  let service: ServiceRegistroEspecialistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRegistroEspecialistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
