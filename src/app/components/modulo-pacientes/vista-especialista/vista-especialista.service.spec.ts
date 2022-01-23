import { TestBed } from '@angular/core/testing';

import { VistaEspecialistaService } from './vista-especialista.service';

describe('VistaEspecialistaService', () => {
  let service: VistaEspecialistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VistaEspecialistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
