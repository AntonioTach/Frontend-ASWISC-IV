/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NombreServiceService } from './nombre-service.service';

describe('Service: NombreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NombreServiceService]
    });
  });

  it('should ...', inject([NombreServiceService], (service: NombreServiceService) => {
    expect(service).toBeTruthy();
  }));
});
