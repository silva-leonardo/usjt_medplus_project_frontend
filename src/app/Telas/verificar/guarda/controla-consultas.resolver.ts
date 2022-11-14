import { Injectable,} from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ConsultaService } from "../../consulta.service";
import { Consulta } from "../../Consulta";

@Injectable({ providedIn: 'root' })
export class ControlaConsultasResolver implements Resolve<Consulta[]> {
  
  constructor(private consultaService: ConsultaService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Consulta[]>|Promise<Consulta[]>|Consulta[] {
    
    let user = JSON.parse(localStorage.getItem('User') || '[]');
    console.log("Estou no resolver!")
    console.log(this.consultaService.validarConsultas(user.pac_id))
    return this.consultaService.validarConsultas(user.pac_id);
  }
}