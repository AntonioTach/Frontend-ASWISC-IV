import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTareaComponent } from './ver-tarea.component';

describe('VerTareaComponent', () => {
  let component: VerTareaComponent;
  let fixture: ComponentFixture<VerTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerTareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
