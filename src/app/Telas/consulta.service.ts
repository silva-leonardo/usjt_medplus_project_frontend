import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { environment } from 'src/environments/environment';
import { Consulta } from './Consulta';

@Injectable({
  providedIn: 'root'
})

export class ConsultaService {

  private readonly API = `${environment.API_consultas}`;

  constructor(private htppClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  agendaConsulta(nome: String, cpf: String, email: String, dataConsulta: Date, idEspecialidade: Number, idUnidade: Number): void {
    const consulta = {
      nome,
      cpf,
      email,
      dataConsulta,
      idEspecialidade,
      idUnidade
    }
    this.htppClient.post<{ mensagem: String, status: Number }>(this.API + 'consulta/agendar', consulta).subscribe((dados) => {
      alert(`consulta agendada para o dia ${consulta.dataConsulta}`);
    });
  }

  validarConsultas(id: String): Promise<Consulta[]>{
    
    //instanciando e recebendo valores do usuario
    const consulta = {
      id
    }

    return new Promise((resolve)=> {
      setTimeout(() => {
        this.htppClient.post(this.API + 'consultas/usuario', consulta).subscribe((response: any) => {
          resolve(response);
        })
      }, 250)
    })
  }

  removerConsulta(id: number) {
    this.htppClient.delete(this.API + 'consulta/cancelar/'+ id).subscribe((response: any) => {
      console.log(`Consulta removida`);
    });
  }
}
