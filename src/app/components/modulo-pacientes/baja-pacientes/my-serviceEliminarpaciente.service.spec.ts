/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyServiceEliminarpacienteService } from './my-serviceEliminarpaciente.service';

describe('Service: MyServiceEliminarpaciente', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyServiceEliminarpacienteService]
    });
  });

  it('should ...', inject([MyServiceEliminarpacienteService], (service: MyServiceEliminarpacienteService) => {
    expect(service).toBeTruthy();
  }));
});
