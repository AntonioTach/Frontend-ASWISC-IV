import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatizacionWiscivComponent } from './automatizacion-wisciv.component';

describe('AutomatizacionWiscivComponent', () => {
  let component: AutomatizacionWiscivComponent;
  let fixture: ComponentFixture<AutomatizacionWiscivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomatizacionWiscivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatizacionWiscivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
