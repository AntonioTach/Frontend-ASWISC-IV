import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPruebaComponent } from './ver-prueba.component';

describe('VerPruebaComponent', () => {
  let component: VerPruebaComponent;
  let fixture: ComponentFixture<VerPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPruebaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
