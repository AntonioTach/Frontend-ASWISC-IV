import { TestBed } from '@angular/core/testing';

import { HorariosServiceService } from './horarios-service.service';

describe('HorariosServiceService', () => {
  let service: HorariosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorariosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
