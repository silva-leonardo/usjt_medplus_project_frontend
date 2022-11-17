import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-esquecisenha',
  templateUrl: './esquecisenha.component.html',
  styleUrls: ['./esquecisenha.component.css']
})
export class EsquecisenhaComponent implements OnInit {

  constructor(private clienteService: ClienteService) { 
    
  }
  ngOnInit(): void {
  }
  atualizaSenha(form: NgForm){
     //transforma o CPF
     var ao_cpf= form.value.cpf; 
     ao_cpf = ao_cpf.replace( /(\d{3})(\d)/ , "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
     ao_cpf = ao_cpf.replace( /(\d{3})(\d)/ , "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
     ao_cpf = ao_cpf.replace( /(\d{3})(\d{1,2})$/ , "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
    
    this.clienteService.redefinirSenha(
      ao_cpf, 
      form.value.senha)
  }
}
