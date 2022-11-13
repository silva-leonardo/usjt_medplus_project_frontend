import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { environment } from 'src/environments/environment';

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
    this.htppClient.post<{ mensagem: String, status: Number }>(this.API+'consulta/agendar', consulta).subscribe((dados) => {
      alert(`consulta agendada para o dia ${consulta.dataConsulta}`);
    });
  }

  validarConsultas(){
    this.htppClient.get(this.API+'consultas')
    .subscribe((response:any) => {
      console.log(JSON.stringify(response));
    })  
  }
}
