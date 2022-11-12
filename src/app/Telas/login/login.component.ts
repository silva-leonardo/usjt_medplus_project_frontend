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
  onSubmit(clienteForm: NgForm) {
    this.clienteService.loginUsuario(
      clienteForm.value.cpf,
      clienteForm.value.senha
    )
  }

  ngOnInit(): void {
    localStorage.clear();
  }

}
