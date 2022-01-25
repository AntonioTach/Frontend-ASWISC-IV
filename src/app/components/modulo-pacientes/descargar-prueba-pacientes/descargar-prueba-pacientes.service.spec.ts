import { TestBed } from '@angular/core/testing';

import { DescargarPruebaPacientesService } from './descargar-prueba-pacientes.service';

describe('DescargarPruebaPacientesService', () => {
  let service: DescargarPruebaPacientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescargarPruebaPacientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
