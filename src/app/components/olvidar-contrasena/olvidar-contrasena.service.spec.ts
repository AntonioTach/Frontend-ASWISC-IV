/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OlvidarContrasenaService } from './olvidar-contrasena.service';

describe('Service: OlvidarContrasena', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OlvidarContrasenaService]
    });
  });

  it('should ...', inject([OlvidarContrasenaService], (service: OlvidarContrasenaService) => {
    expect(service).toBeTruthy();
  }));
});
