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
import { UsuarioAutenticadoGuard } from './Telas/guardas/usuario-autenticado.guard';
import { ControlaConsultasResolver } from './Telas/verificar/guarda/controla-consultas.resolver';


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
    component: NavegacaoComponent,
    canActivate: [UsuarioAutenticadoGuard]
  },
  {
    path:'consulta',
    component: ConsultaComponent,
    canActivate: [UsuarioAutenticadoGuard]
  },
  {
    path:'nav-agendar',
    component: NavAgendarComponent,
    canActivate: [UsuarioAutenticadoGuard]
  },
  {
    path:'nav-verificar',
    component: NavVerificarComponent,
    canActivate: [UsuarioAutenticadoGuard],
    resolve: { consultas : ControlaConsultasResolver}
  },
  {
    path:'verificar',
    component: VerificarComponent,
    canActivate: [UsuarioAutenticadoGuard],
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
