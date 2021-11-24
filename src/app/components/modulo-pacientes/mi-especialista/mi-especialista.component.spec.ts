import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiEspecialistaComponent } from './mi-especialista.component';

describe('MiEspecialistaComponent', () => {
  let component: MiEspecialistaComponent;
  let fixture: ComponentFixture<MiEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiEspecialistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
