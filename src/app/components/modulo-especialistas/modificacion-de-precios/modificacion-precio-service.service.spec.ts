/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModificacionPrecioServiceService } from './modificacion-precio-service.service';

describe('Service: ModificacionPrecioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModificacionPrecioServiceService]
    });
  });

  it('should ...', inject([ModificacionPrecioServiceService], (service: ModificacionPrecioServiceService) => {
    expect(service).toBeTruthy();
  }));
});
