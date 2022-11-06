import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVerificarComponent } from './nav-verificar.component';

describe('NavVerificarComponent', () => {
  let component: NavVerificarComponent;
  let fixture: ComponentFixture<NavVerificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavVerificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavVerificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
