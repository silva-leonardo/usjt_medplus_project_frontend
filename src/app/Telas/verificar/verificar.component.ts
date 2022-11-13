import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';


@Component({
  selector: 'app-verificar',
  templateUrl: './verificar.component.html',
  styleUrls: ['./verificar.component.css']
})
export class VerificarComponent implements OnInit {

  constructor(private consultaService: ConsultaService) { }

  ngOnInit(): void {
    this.consultaService.validarConsultas();
  }

  consultas = [
    {
      id: 1,
      especialidade: "Pediatria",
      data: "22/02/22"
    },
    {
      id: 2,
      especialidade: "Odontologia",
      data: "22/02/22"
    },
    {
      id: 3,
      especialidade: "Pediatria",
      data: "22/02/22"
    },
  ]
}