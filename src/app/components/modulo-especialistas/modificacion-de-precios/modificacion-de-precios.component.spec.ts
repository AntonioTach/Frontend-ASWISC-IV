import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionDePreciosComponent } from './modificacion-de-precios.component';

describe('ModificacionDePreciosComponent', () => {
  let component: ModificacionDePreciosComponent;
  let fixture: ComponentFixture<ModificacionDePreciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificacionDePreciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificacionDePreciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
