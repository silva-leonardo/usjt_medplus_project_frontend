import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarComponent } from './verificar.component';

describe('VerificarComponent', () => {
  let component: VerificarComponent;
  let fixture: ComponentFixture<VerificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
