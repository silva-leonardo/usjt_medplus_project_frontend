import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Consulta } from '../Consulta';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  consultas: Consulta[];

  idConsulta: any;
  unidade: any;
  espec: any;
  data: any;

  constructor(
    private consultaService: ConsultaService,
    private route: ActivatedRoute
    ) {
      this.consultas = this.route.snapshot.data['consultas'];
    }


  ngOnInit(): void {
    this.recebeValoresConsulta()
  }
  
  idEspecialidade!: Number;
  idUnidade!: Number;

  handlerEspec($event: any): void {
    this.idEspecialidade = $event.target.value;
    console.log('espec:' + this.idEspecialidade)
  }

  handlerUnidade($event: any): void {
    this.idUnidade = $event.target.value;
    console.log('unidade:' + this.idUnidade)
  }

  recebeValoresConsulta(){
    let consulta =  JSON.parse(localStorage.getItem('ConsultaRecebida') || '[]')

    this.data = consulta.cons_dthr;
    this.idConsulta = consulta.cons_id;
    this.data = consulta.cons_dthr;
    this.espec = consulta.esp_especialidade;
    this.unidade = consulta.und_unidade;

  }

  onSubmit(form: NgForm) {
    console.log(form.value.data)
    this.consultaService.editaConsulta(
      this.idConsulta,
      form.value.data,
      this.idUnidade,
      )

    Swal.fire({
      title: 'Consulta Reagendada!',
      text: 'Consulta Reagendada com sucesso!',
      icon: 'success',
      toast: true
    }).then((result) => {
      localStorage.removeItem('ConsultaRecebida');
      localStorage.removeItem('consultaParaEditar');

      window.location.href = '/nav-verificar';
    })
  }
}
