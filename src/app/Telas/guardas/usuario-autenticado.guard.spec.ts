import { TestBed } from '@angular/core/testing';

import { UsuarioAutenticadoGuard } from './usuario-autenticado.guard';

describe('UsuarioAutenticadoGuard', () => {
  let guard: UsuarioAutenticadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsuarioAutenticadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
