import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiscIvComponent } from './wisc-iv.component';

describe('WiscIvComponent', () => {
  let component: WiscIvComponent;
  let fixture: ComponentFixture<WiscIvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiscIvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WiscIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
