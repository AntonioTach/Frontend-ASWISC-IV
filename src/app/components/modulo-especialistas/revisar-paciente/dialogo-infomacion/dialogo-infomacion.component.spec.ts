import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoInfomacionComponent } from './dialogo-infomacion.component';

describe('DialogoInfomacionComponent', () => {
  let component: DialogoInfomacionComponent;
  let fixture: ComponentFixture<DialogoInfomacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoInfomacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoInfomacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
