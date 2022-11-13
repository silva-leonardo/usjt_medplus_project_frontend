import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAutenticadoGuard implements CanActivate {
  user: any;

  constructor(
    private router: Router
  ) { }

  canActivate(){
    if (localStorage.getItem('User') !== null) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
