import { TestBed } from '@angular/core/testing';

import { ExpedientePacientesService } from './expediente-pacientes.service';

describe('ExpedientePacientesService', () => {
  let service: ExpedientePacientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpedientePacientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
