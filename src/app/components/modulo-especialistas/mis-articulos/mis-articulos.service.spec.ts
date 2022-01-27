import { TestBed } from '@angular/core/testing';

import { MisArticulosService } from './mis-articulos.service';

describe('MisArticulosService', () => {
  let service: MisArticulosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisArticulosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
