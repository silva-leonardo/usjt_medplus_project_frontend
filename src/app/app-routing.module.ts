import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './Telas/area-painel/consulta/consulta.component';
import { VerificarComponent } from './Telas/area-painel/verificar/verificar.component';
import { telaCadastroComponent } from './Telas/tela-cadastro/tela-cadastro.component';
import { LoginComponent } from './Telas/login/login.component';
import { PaginaInicialComponent } from './Telas/pagina-inicial/pagina-inicial.component';
import { PainelComponent } from './Telas/painel/painel.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PaginaInicialComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: telaCadastroComponent
  },
  {
    path: 'painel',
    component: PainelComponent
  },
  {
    path: 'agendar',
    component: ConsultaComponent
  },
  {
    path: 'verificar',
    component: VerificarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
