/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArticuloServiceService } from './articulo-service.service';

describe('Service: ArticuloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticuloServiceService]
    });
  });

  it('should ...', inject([ArticuloServiceService], (service: ArticuloServiceService) => {
    expect(service).toBeTruthy();
  }));
});
