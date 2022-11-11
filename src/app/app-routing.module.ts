import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Telas/login/login.component';
import { CadastroComponent } from './Telas/cadastro/cadastro.component';
import { IntegrantesComponent } from './Telas/integrantes/integrantes.component';
import { ConsultaComponent } from './Telas/consulta/consulta.component';
import { NavegacaoComponent } from './Telas/navegacao/navegacao.component';
import { NavVerificarComponent } from './Telas/navegacao/nav-verificar/nav-verificar.component';
import { NavAgendarComponent } from './Telas/navegacao/nav-agendar/nav-agendar.component';
import { HomepageComponent } from './Telas/homepage/homepage.component';
import { VerificarComponent } from './Telas/verificar/verificar.component';
import { SenhaComponent } from './Telas/senha/senha.component';
import { EsquecisenhaComponent } from './Telas/esquecisenha/esquecisenha.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { 
    path:'cadastro',
    component: CadastroComponent
  },
  { 
    path:'integrantes',
    component: IntegrantesComponent
  },
  {
    path:'navegacao',
    component: NavegacaoComponent
  },
  {
    path:'consulta',
    component: ConsultaComponent
  },
  {
    path:'nav-agendar',
    component: NavAgendarComponent
  },
  {
    path:'nav-verificar',
    component: NavVerificarComponent
  },
  {
    path:'verificar',
    component: VerificarComponent
  },
  {
    path:'senha',
    component: SenhaComponent
  },
  {
    path:'esquecisenha',
    component: EsquecisenhaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
