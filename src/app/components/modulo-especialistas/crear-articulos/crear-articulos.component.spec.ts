import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearArticulosComponent } from './crear-articulos.component';

describe('CrearArticulosComponent', () => {
  let component: CrearArticulosComponent;
  let fixture: ComponentFixture<CrearArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearArticulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
