import { TestBed } from '@angular/core/testing';

import { SubirPruebaService } from './subir-prueba.service';

describe('SubirPruebaService', () => {
  let service: SubirPruebaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubirPruebaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
