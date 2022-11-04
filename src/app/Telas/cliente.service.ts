import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

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
    this.htppClient.post<{mensagem: string, status: number}>('http://localhost:5000/login',cliente).subscribe((dados) => {
      alert(dados.mensagem + ' ' + dados.status);
      window.location.href = '/painel';
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

}
