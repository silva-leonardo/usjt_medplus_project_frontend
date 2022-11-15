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

    //transforma o CPF
    var ao_cpf = clienteForm.value.cpf;
    ao_cpf = ao_cpf.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
    ao_cpf = ao_cpf.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
    ao_cpf = ao_cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos

    console.log(ao_cpf);

    this.clienteService.loginUsuario(
      ao_cpf,
      clienteForm.value.senha
    )
  }

  ngOnInit(): void {
    localStorage.clear();
  }

}
