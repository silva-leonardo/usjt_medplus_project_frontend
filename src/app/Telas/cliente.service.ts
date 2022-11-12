import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { catchError, Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'

@Injectable({ 
  providedIn: 'root' 
})

export class ClienteService {

  private readonly API = `${environment.API_usuarios}`;

  constructor(private htppClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  //método para login
  loginUsuario(cpf: String, senha: String): void {

    //monta json para passar na URL
    const cliente = {
      cpf,
      senha
    }

    //chamada API para realizar login
    this.htppClient.post(this.API+'login', cliente)
      .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {

        Swal.fire({
          title: 'Senha Invalida!',
          text: 'tente novamente ou envie uma solicitação para alteração de senha!',
          icon: 'error',
          toast:true,
        })
        
        return of();
      }))
      .subscribe((response:any) => {
        localStorage.setItem('User', JSON.stringify(response));

        Swal.fire({
          title: 'Credenciais Válidas!',
          text: 'Seja bem vindo!',
          icon: 'success',
        }).then((result) => {
          window.location.href = '/navegacao';
        })

      });
  }

  cadastroUsuario(nome: String, cpf: String, dataNascimento: Date, sexo: String, celular: String, email: String, senha: String): void {
    const paciente = {
      nome,
      cpf,
      dataNascimento,
      sexo,
      celular,
      email,
      senha
    }
    this.htppClient.post<{ mensagem: string, status: number }>(this.API+'cadastro/paciente', paciente).subscribe((dados) => {
      window.location.href = '/login';
    });
  }
}
