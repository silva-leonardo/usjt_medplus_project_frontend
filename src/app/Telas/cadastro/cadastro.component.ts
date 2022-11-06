import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteService } from '../cliente.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private clienteService: ClienteService) {
  }
  selected!: String;
  handler($event: any): void {
    console.log('selected value:: ', $event.target.value)
    this.selected = $event.target.value;
}
  cadastro(form: NgForm) {
    //executa o método de login no Service passando os valores
    this.clienteService.cadastroUsuario(
      form.value.Nome,
      form.value.cpf,
      form.value.datanasc,
      this.selected,
      form.value.tell,
      form.value.email,
      form.value.senha
    )
    //reseta o form após executar
    form.resetForm();
  }
  ngOnInit(): void {
  }

}
