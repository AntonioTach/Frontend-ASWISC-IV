import { TestBed } from '@angular/core/testing';

import { DescargarExpedienteService } from './descargar-expediente.service';

describe('DescargarExpedienteService', () => {
  let service: DescargarExpedienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescargarExpedienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
