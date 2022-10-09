import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaFormulariosComponent } from './area-formularios.component';

describe('AreaFormulariosComponent', () => {
  let component: AreaFormulariosComponent;
  let fixture: ComponentFixture<AreaFormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaFormulariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
