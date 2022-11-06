import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Telas/login/login.component';
import { PainelComponent } from './Telas/painel/painel.component';
import { CadastroComponent } from './Telas/cadastro/cadastro.component';
import { ConsultaComponent } from './Telas/consulta/consulta.component';
import { IntegrantesComponent } from './Telas/integrantes/integrantes.component';
import { CabecalhoComponent } from './Telas/painel/cabecalho/cabecalho.component';
import { NavegacaoComponent } from './Telas/painel/navegacao/navegacao.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Telas/header/header.component';
import { FooterComponent } from './Telas/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PainelComponent,
    CabecalhoComponent,
    NavegacaoComponent,
    CadastroComponent,
    IntegrantesComponent,
    ConsultaComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatToolbarModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
