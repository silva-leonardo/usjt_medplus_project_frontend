import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  constructor(private clienteService: ClienteService) {
  }

  ngOnInit(): void {
  }
  especialidade!: String;
  unidade!: String;
handlerEspec($event: any): void {
    this.especialidade = $event.target.value;
    console.log('espec:' + this.especialidade)
}
handlerUnidade($event: any): void {
  this.unidade = $event.target.value;
  console.log('unidade:' + this.unidade)
}

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  consulta(form: NgForm){
    this.clienteService.agendaConsulta(
      form.value.Nome,
      form.value.cpf,
      form.value.email,
      form.value.data,
      this.especialidade,
      this.unidade
    )
  }

}

