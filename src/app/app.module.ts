import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Telas/login/login.component';
import { PainelComponent } from './Telas/painel/painel.component';
import { CabecalhoComponent } from './Telas/painel/cabecalho/cabecalho.component';
import { NavegacaoComponent } from './Telas/painel/navegacao/navegacao.component';
import { AreaFormulariosComponent } from './Telas/painel/area-formularios/area-formularios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PainelComponent,
    CabecalhoComponent,
    NavegacaoComponent,
    AreaFormulariosComponent
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
