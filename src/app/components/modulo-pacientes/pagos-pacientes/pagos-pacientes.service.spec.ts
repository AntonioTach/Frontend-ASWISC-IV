import { TestBed } from '@angular/core/testing';

import { PagosPacientesService } from './pagos-pacientes.service';

describe('PagosPacientesService', () => {
  let service: PagosPacientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagosPacientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
