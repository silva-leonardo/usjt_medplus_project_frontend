import { ComponentFixture, TestBed } from '@angular/core/testing';
import { telaCadastroComponent } from './tela-cadastro.component';

describe('telaCadastroComponent', () => {
  let component: telaCadastroComponent;
  let fixture: ComponentFixture<telaCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ telaCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(telaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
