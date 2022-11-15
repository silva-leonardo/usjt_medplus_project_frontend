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

  validarConsultas(id: String): Promise<Consulta[]> {
    //instanciando e recebendo valores do usuario
    const consulta = {
      id
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        this.htppClient.post(this.API + 'consultas/usuario', consulta).subscribe((response: any) => {
          resolve(response);
        })
      }, 250)
    })
  }

  validaConsultaId(id: String): Promise<Consulta[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.htppClient.get(this.API + 'consulta/' + id).subscribe((response: any) => {
          localStorage.setItem('ConsultaRecebida', JSON.stringify(response))
          resolve(response);
        })
      }, 50)
    })
  }

  editaConsulta(id: String, dataConsulta: Date, idUnidade: Number): void {

    const consulta = {
      dataConsulta,
      idUnidade
    }

    this.htppClient.put(this.API + 'consulta/reagendamento/' + id, consulta).subscribe((response: any) => {
      console.log(response);
      return response;
    })

  }

  removerConsulta(id: number) {
    this.htppClient.delete(this.API + 'consulta/cancelar/' + id).subscribe((response: any) => {
      console.log(`Consulta removida`);
    });
  }
}
