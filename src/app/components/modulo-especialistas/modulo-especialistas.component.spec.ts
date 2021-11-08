import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloEspecialistasComponent } from './modulo-especialistas.component';

describe('ModuloEspecialistasComponent', () => {
  let component: ModuloEspecialistasComponent;
  let fixture: ComponentFixture<ModuloEspecialistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloEspecialistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloEspecialistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
