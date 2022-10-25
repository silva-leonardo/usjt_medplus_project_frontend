import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Telas/login/login.component';
import { PainelComponent } from './Telas/painel/painel.component';
import { CabecalhoComponent } from './Telas/painel/cabecalho/cabecalho.component';
import { NavegacaoComponent } from './Telas/painel/navegacao/navegacao.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PainelComponent,
    CabecalhoComponent,
    NavegacaoComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
