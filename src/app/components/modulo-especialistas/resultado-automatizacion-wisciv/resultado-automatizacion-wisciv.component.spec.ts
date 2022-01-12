import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoAutomatizacionWiscivComponent } from './resultado-automatizacion-wisciv.component';

describe('ResultadoAutomatizacionWiscivComponent', () => {
  let component: ResultadoAutomatizacionWiscivComponent;
  let fixture: ComponentFixture<ResultadoAutomatizacionWiscivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoAutomatizacionWiscivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoAutomatizacionWiscivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
