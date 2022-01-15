/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyServiceBajaEspecialistaService } from './my-service-baja-especialista.service';

describe('Service: MyServiceBajaEspecialista', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyServiceBajaEspecialistaService]
    });
  });

  it('should ...', inject([MyServiceBajaEspecialistaService], (service: MyServiceBajaEspecialistaService) => {
    expect(service).toBeTruthy();
  }));
});
