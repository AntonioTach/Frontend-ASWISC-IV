import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEspecialistaComponent } from './navbar-especialista.component';

describe('NavbarEspecialistaComponent', () => {
  let component: NavbarEspecialistaComponent;
  let fixture: ComponentFixture<NavbarEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarEspecialistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
