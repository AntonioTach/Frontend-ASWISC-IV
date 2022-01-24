/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyServiceNombrePacienteService } from './my-service-NombrePaciente.service';

describe('Service: MyServiceNombrePaciente', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyServiceNombrePacienteService]
    });
  });

  it('should ...', inject([MyServiceNombrePacienteService], (service: MyServiceNombrePacienteService) => {
    expect(service).toBeTruthy();
  }));
});
