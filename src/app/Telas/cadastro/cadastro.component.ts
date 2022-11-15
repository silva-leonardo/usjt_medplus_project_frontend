import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  senhasValidadas: boolean = false;

  constructor(private clienteService: ClienteService) {
  }

  selected!: String;

  handler($event: any): void {
    console.log('selected value:: ', $event.target.value)
    this.selected = $event.target.value;
  }

  cadastro(form: NgForm) {

    //transforma o CPF
    var ao_cpf= form.value.cpf; 
    ao_cpf = ao_cpf.replace( /(\d{3})(\d)/ , "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
    ao_cpf = ao_cpf.replace( /(\d{3})(\d)/ , "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
    ao_cpf = ao_cpf.replace( /(\d{3})(\d{1,2})$/ , "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
         
    console.log(typeof(this.selected))
    //executa o método de login no Service passando os valores
    this.clienteService.cadastroUsuario(
      form.value.Nome,
      ao_cpf,
      form.value.datanasc,
      this.selected,
      form.value.tell,
      form.value.email,
      form.value.senha,
    )
    //reseta o form após executar
    form.resetForm();
  }

  validarSenha(form: NgForm) {

    console.log("Validando senha...")

    if(form.value.senha !== form.value.senha2) {
      this.senhasValidadas = false;
      form.controls['senha'].setErrors({'incorrect': false});
    }
    else{
      form.controls['senha'].setErrors(null);
      this.senhasValidadas = true;
    }
  }

  ngOnInit(): void {
  }

}
