import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { NgForm } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  senhasValidadas: boolean = false;
  CPFValido: boolean = false;

  constructor(private clienteService: ClienteService) {
  }

  selected!: String;

  handler($event: any): void {
    console.log('selected value:: ', $event.target.value)
    this.selected = $event.target.value;
  }

  cadastro(form: NgForm) {
    //executa o método de login no Service passando os valores
    /* this.clienteService.cadastroUsuario(
      form.value.Nome,
      form.value.cpf,
      form.value.datanasc,
      this.selected,
      form.value.tell,
      form.value.email,
      form.value.senha,
    ) */
    //reseta o form após executar
    form.resetForm();
  }

  validarSenha(form: NgForm) {

    console.log("Validando senha...")

    if(form.value.senha !== form.value.senha2) {
      this.senhasValidadas = false;
      form.controls['senha'].setErrors({'incorrect': false});
    }
    else{
      form.controls['senha'].setErrors(null);
      this.senhasValidadas = true;
    }
  }

  validarCPF(form: NgForm) {

    var cpf = form.value.cpf;
    var resultado = cpf.indexOf(".");
    console.log(cpf.chart(3)+" primeiro ponto")
    console.log(cpf.chart(6)+" segundo ponto")
    console.log(cpf.chart(9)+"menos")


    if(cpf.length == 14){
      if(resultado == 3 ){
        console.log("fase 1 ok")
        if(resultado == 6 ){
          console.log("fase 2 ok")
          if(resultado == 9 ){
            console.log("fase 3 ok")
            var resultado = cpf.indexOf("-");
            if(resultado == 12){
              console.log("fase 4 ok")
            }
          }
        }
      }
  
    }
  }

  
  ngOnInit(): void {
  }

}
