import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAgendarComponent } from './nav-agendar.component';

describe('NavAgendarComponent', () => {
  let component: NavAgendarComponent;
  let fixture: ComponentFixture<NavAgendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAgendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavAgendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
