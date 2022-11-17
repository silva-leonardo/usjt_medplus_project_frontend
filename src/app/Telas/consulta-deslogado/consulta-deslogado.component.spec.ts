import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDeslogadoComponent } from './consulta-deslogado.component';

describe('ConsultaDeslogadoComponent', () => {
  let component: ConsultaDeslogadoComponent;
  let fixture: ComponentFixture<ConsultaDeslogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaDeslogadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaDeslogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
