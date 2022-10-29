import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Telas/login/login.component'; 
import { telaCadastroComponent} from './Telas/tela-cadastro/tela-cadastro.component';
import { PainelComponent } from './Telas/painel/painel.component';
import { CabecalhoComponent } from './Telas/painel/cabecalho/cabecalho.component';
import { NavegacaoComponent } from './Telas/painel/navegacao/navegacao.component';
import { PaginaInicialComponent } from './Telas/pagina-inicial/pagina-inicial.component';
import { ConsultaComponent } from './Telas/area-painel/consulta/consulta.component';
import { VerificarComponent } from './Telas/area-painel/verificar/verificar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PainelComponent,
    CabecalhoComponent,
    NavegacaoComponent,
    PaginaInicialComponent,
    ConsultaComponent,
    VerificarComponent,
    telaCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
