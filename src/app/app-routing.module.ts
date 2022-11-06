import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Telas/login/login.component';
import { CadastroComponent } from './Telas/cadastro/cadastro.component';
import { IntegrantesComponent } from './Telas/integrantes/integrantes.component';
import { ConsultaComponent } from './Telas/consulta/consulta.component';
import { NavegacaoComponent } from './Telas/navegacao/navegacao.component';
import { NavVerificarComponent } from './Telas/navegacao/nav-verificar/nav-verificar.component';
import { NavAgendarComponent } from './Telas/navegacao/nav-agendar/nav-agendar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
