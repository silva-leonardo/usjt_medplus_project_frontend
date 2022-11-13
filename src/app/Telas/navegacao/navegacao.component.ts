import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css']
})


export class NavegacaoComponent implements OnInit {

  user: any;

  constructor() { }

  ngOnInit(): void {
    this.user = [];
    this.receberUsuario()

  }

  receberUsuario(): void {
    this.user = JSON.parse(localStorage.getItem('User') || '{}');
  }

  sair(): void {
    localStorage.clear();

    Swal.fire({
      title: 'Você Foi Deslogado!',
      text: 'Será redirecionado para a pagina inicial.',
      icon: 'info',
    }).then((result) => {
      window.location.href = '/home';
    })

    console.log("Saindo...");
  }

}
