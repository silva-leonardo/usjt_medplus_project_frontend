import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-esquecisenha',
  templateUrl: './esquecisenha.component.html',
  styleUrls: ['./esquecisenha.component.css']
})
export class EsquecisenhaComponent implements OnInit {

  constructor(private clienteService: ClienteService) { 
    
  }
  ngOnInit(): void {
  }
  atualizaSenha(form: NgForm){
    this.clienteService.redefinirSenha(
      form.value.cpf, 
      form.value.senha)
  }
}
