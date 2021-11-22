import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosEspecialistaComponent } from './articulos-especialista.component';

describe('ArticulosEspecialistaComponent', () => {
  let component: ArticulosEspecialistaComponent;
  let fixture: ComponentFixture<ArticulosEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosEspecialistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
