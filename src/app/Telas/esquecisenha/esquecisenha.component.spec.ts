import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsquecisenhaComponent } from './esquecisenha.component';

describe('EsquecisenhaComponent', () => {
  let component: EsquecisenhaComponent;
  let fixture: ComponentFixture<EsquecisenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsquecisenhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsquecisenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
