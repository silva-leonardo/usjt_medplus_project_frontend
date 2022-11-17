import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ConsultaService } from '../consulta.service';
import { Consulta } from '../Consulta';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-verificar',
  templateUrl: './verificar.component.html',
  styleUrls: ['./verificar.component.css']
})
export class VerificarComponent implements OnInit {
  consultas: Consulta[];

  constructor(
    private consultaService: ConsultaService,
    private route: ActivatedRoute
  ) {
    this.consultas = this.route.snapshot.data['consultas'];
  }

  user: any;

  ngOnInit(): void {

    console.log(this.consultas);
  }

  editarConsulta(id: number): void{
    localStorage.setItem('consultaParaEditar', JSON.stringify(id));
    window.location.href = '/nav-editar';
  }

  deletarConsulta(id: number, Especialidade: string, endereco: string, unidade: string): void {
    this.consultaService.removerConsulta(id);

    Swal.fire({
      title: 'Consulta Excluída com Sucesso!',
      text: `Sua consulta na ${endereco},${unidade}, de especialidade ${Especialidade} foi cancelada.`,
      icon: 'success',
    }).then((result) => {
      window.location.reload();
    })
  }
}