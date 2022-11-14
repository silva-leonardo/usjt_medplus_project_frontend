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

  user : any;

  ngOnInit(): void {

    console.log(this.consultas);
  }

  deletarConsulta (id: number): void{
    this.consultaService.removerConsulta(id);
    window.location.href = '/nav-verificar'
    }
}