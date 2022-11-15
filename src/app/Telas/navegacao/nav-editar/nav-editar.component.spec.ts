import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEditarComponent } from './nav-editar.component';

describe('NavEditarComponent', () => {
  let component: NavEditarComponent;
  let fixture: ComponentFixture<NavEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
