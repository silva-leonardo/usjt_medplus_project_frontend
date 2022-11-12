import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { catchError, Observable, of, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClienteService {

  constructor(private htppClient: HttpClient) {
  }

  ngOnInit(): void {
  }
  //método para login
  loginUsuario(cpf: String, senha: String): void{
    //monta json para passar na URL
    const cliente = {
      cpf,
      senha
    }

    //chamada API para realizar login
    this.htppClient.post<{mensagem: string, status: number}>('http://localhost:5000/login',cliente)
    .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
      alert("Senha Invalida, tente novamente ou envie uma solicitação para alteração de senha");
      console.error('There was an error!', error);

      // after handling error, return a new observable 
      // that doesn't emit any values and completes
      return of();
  }))
    .subscribe((dados) => {
      console.log(dados.mensagem);
      alert("Logado com sucesso!");
      window.location.href = '/navegacao';
    });
  }

  cadastroUsuario(nome: String, cpf: String, dataNascimento: Date, sexo: String, celular: String, email: String, senha: String): void{
    const paciente = {
      nome,
      cpf,
      dataNascimento,
      sexo,
      celular,
      email,
      senha
    }
    this.htppClient.post<{mensagem: string, status: number}>('http://localhost:5000/cadastro/paciente',paciente).subscribe((dados)=> {
      window.location.href = '/login';
    });
  }
  agendaConsulta(nome: String, cpf: String, email: String, dataConsulta: Date, idEspecialidade: Number,idUnidade: Number): void{
    const consulta = {
      nome,
      cpf,
      email,
      dataConsulta,
      idEspecialidade,
      idUnidade
    }
    this.htppClient.post<{mensagem: String, status: Number}>('http://localhost:8080/consulta/agendar',consulta).subscribe((dados) => {
      alert(`consulta agendada para o dia ${consulta.dataConsulta}`);
    });
  }
}
