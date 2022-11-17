import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-consulta-deslogado',
  templateUrl: './consulta-deslogado.component.html',
  styleUrls: ['./consulta-deslogado.component.css']
})
export class ConsultaDeslogadoComponent implements OnInit {

  constructor(private consultaService: ConsultaService) {
  }
 
  ngOnInit(): void {
    this.user = [];
    this.receberUsuario();
    this.usuarioLogado = false;
  }

  user : any;
  idEspecialidade!: Number;
  idUnidade!: Number;
  usuarioLogado: any;

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

  receberConsultas(): void {
    this.consultaService.validarConsultas(this.user.pac_id);
    console.log('Recebendo Consultas no componente de consulta');
  }

  consulta(form: NgForm) {

     //transforma o CPF
     var ao_cpf= form.value.cpf; 
     ao_cpf = ao_cpf.replace( /(\d{3})(\d)/ , "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
     ao_cpf = ao_cpf.replace( /(\d{3})(\d)/ , "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
     ao_cpf = ao_cpf.replace( /(\d{3})(\d{1,2})$/ , "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
          

    this.consultaService.agendaConsultaDeslogado(
      form.value.nome,
      ao_cpf,
      form.value.email,
      form.value.data,
      this.idEspecialidade,
      this.idUnidade,
      this.usuarioLogado
    )

    Swal.fire({
      title: 'Consulta agendada!',
      text: `Verifique o seu email:${form.value.email} para acessar os dados da sua consulta`,
      icon: 'success',
      toast: true
    }).then((result) => {
      this.receberConsultas()
      this.ngOnInit();
    })
  }
}
