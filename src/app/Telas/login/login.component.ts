import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteService } from '../cliente.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  //construtor para o service
  constructor(private clienteService: ClienteService) {
  }

  //função 'local' de login para passar valores do form
  login(form: NgForm) {
    if(form.invalid) return
    //executa o método de login no Service passando os valores
    this.clienteService.loginUsuario(
      form.value.cpf,
      form.value.senha
    )
    //reseta o form após executar
    form.resetForm();
  }

  ngOnInit(): void {
  }

}
