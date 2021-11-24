import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosPacientesComponent } from './articulos-pacientes.component';

describe('ArticulosPacientesComponent', () => {
  let component: ArticulosPacientesComponent;
  let fixture: ComponentFixture<ArticulosPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
