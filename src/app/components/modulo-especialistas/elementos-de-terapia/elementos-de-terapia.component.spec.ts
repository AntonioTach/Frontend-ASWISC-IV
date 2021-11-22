import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementosDeTerapiaComponent } from './elementos-de-terapia.component';

describe('ElementosDeTerapiaComponent', () => {
  let component: ElementosDeTerapiaComponent;
  let fixture: ComponentFixture<ElementosDeTerapiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementosDeTerapiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementosDeTerapiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
