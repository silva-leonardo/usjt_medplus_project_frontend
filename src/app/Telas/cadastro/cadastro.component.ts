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

    console.log(typeof(this.selected))
    //executa o método de login no Service passando os valores
    this.clienteService.cadastroUsuario(
      form.value.Nome,
      form.value.cpf,
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
