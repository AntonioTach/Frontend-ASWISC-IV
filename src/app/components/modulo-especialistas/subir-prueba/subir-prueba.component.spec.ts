import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirPruebaComponent } from './subir-prueba.component';

describe('SubirPruebaComponent', () => {
  let component: SubirPruebaComponent;
  let fixture: ComponentFixture<SubirPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirPruebaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
