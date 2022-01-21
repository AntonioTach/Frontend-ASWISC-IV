import { TestBed } from '@angular/core/testing';

import { ModificacionExpedienteServiceService } from './modificacion-expediente-service.service';

describe('ModificacionExpedienteServiceService', () => {
  let service: ModificacionExpedienteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificacionExpedienteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
