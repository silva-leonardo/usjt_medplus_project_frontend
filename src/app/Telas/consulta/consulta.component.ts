import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { ConsultaService } from '../consulta.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  constructor(private consultaService: ConsultaService) {
  }

  ngOnInit(): void {
    this.user = [];
    this.receberUsuario();
  }

  user : any;
  idEspecialidade!: Number;
  idUnidade!: Number;

  receberUsuario() : void {
    this.user = JSON.parse(localStorage.getItem('User')  || '{}');
  }

  handlerEspec($event: any): void {
    this.idEspecialidade = $event.target.value;
    console.log('espec:' + this.idEspecialidade)
  }

  handlerUnidade($event: any): void {
    this.idUnidade = $event.target.value;
    console.log('unidade:' + this.idUnidade)
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  consulta(form: NgForm) {
    this.consultaService.agendaConsulta(
      this.user.pac_nome,
      this.user.pac_cpf,
      this.user.pac_email,
      form.value.data,
      this.idEspecialidade,
      this.idUnidade
    )

    Swal.fire({
      title: 'Consulta agendada!',
      text: 'Consulta agendada com sucesso!',
      icon: 'success',
      toast: true
    })

  }

}

