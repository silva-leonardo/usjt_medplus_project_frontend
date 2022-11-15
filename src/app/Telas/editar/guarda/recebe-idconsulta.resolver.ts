import { Injectable,} from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ConsultaService } from "../../consulta.service";
import { Consulta } from "../../Consulta";

@Injectable({ providedIn: 'root' })
export class RecebeIdConsultaResolver implements Resolve<Consulta[]> {
  
  constructor(private consultaService: ConsultaService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Consulta[]>|Promise<Consulta[]>|Consulta[] {
    
    let id = JSON.parse(localStorage.getItem('consultaParaEditar') || '[]');
    return this.consultaService.validaConsultaId(id);
  }
}