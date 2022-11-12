import { Component, OnInit } from '@angular/core';

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
    console.log("Saindo...");
  }

}
