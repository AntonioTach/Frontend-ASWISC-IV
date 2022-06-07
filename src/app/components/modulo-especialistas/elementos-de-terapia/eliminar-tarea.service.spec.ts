/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EliminarTareaService } from './eliminar-tarea.service';

describe('Service: EliminarTarea', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EliminarTareaService]
    });
  });

  it('should ...', inject([EliminarTareaService], (service: EliminarTareaService) => {
    expect(service).toBeTruthy();
  }));
});
