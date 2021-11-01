import { TestBed } from '@angular/core/testing';

import {ServiceLoginUsuariosService} from './login.service'

describe('ServiceLoginUsuariosService', () => {
    let service: ServiceLoginUsuariosService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(ServiceLoginUsuariosService);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });