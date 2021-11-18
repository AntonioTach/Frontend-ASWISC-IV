import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioEspecialistaComponent } from './inicio-especialista.component';

describe('InicioEspecialistaComponent', () => {
  let component: InicioEspecialistaComponent;
  let fixture: ComponentFixture<InicioEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioEspecialistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
