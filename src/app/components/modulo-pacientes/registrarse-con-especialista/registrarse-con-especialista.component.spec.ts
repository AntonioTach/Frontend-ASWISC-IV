import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarseConEspecialistaComponent } from './registrarse-con-especialista.component';

describe('RegistrarseConEspecialistaComponent', () => {
  let component: RegistrarseConEspecialistaComponent;
  let fixture: ComponentFixture<RegistrarseConEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarseConEspecialistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarseConEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
