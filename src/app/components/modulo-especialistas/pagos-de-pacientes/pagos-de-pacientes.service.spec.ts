import { TestBed } from '@angular/core/testing';

import { PagosDePacientesService } from './pagos-de-pacientes.service';

describe('PagosDePacientesService', () => {
  let service: PagosDePacientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagosDePacientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
