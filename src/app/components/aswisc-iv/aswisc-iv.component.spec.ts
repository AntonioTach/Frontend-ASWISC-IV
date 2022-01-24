import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AswiscIvComponent } from './aswisc-iv.component';

describe('AswiscIvComponent', () => {
  let component: AswiscIvComponent;
  let fixture: ComponentFixture<AswiscIvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AswiscIvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AswiscIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
