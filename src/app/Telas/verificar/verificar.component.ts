import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ConsultaService } from '../consulta.service';


@Component({
  selector: 'app-verificar',
  templateUrl: './verificar.component.html',
  styleUrls: ['./verificar.component.css']
})
export class VerificarComponent implements OnInit {

  constructor(private consultaService: ConsultaService) { }

  user : any;
  consultasRecebidas : any;

  ngOnInit(): void {
    this.user = [];
    this.consultasRecebidas = [];

    this.receberUsuario()
    
    this.consultasRecebidas = this.consultaService.validarConsultas(this.user.pac_id);

    this.receberConsultas();

    console.log(this.consultasRecebidas);
  }

  receberUsuario(): void {
    this.user = JSON.parse(localStorage.getItem('User') || '{}');
  }

  receberConsultas(): void {
    this.consultasRecebidas = JSON.parse(localStorage.getItem('Consultas') || '{}');
  }

  deletarConsulta (id: number): void{
    this.consultaService.removerConsulta(id);

    Swal.fire({
      title: 'Consulta Excluída!',
      text: 'Consulta excluída com sucesso!',
      icon: 'success',
      toast: true
    }).then((result) => {
      window.location.href = '/nav-verificar';
    })
    }
}