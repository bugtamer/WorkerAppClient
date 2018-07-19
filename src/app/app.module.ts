import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routingProvider } from './routing';

import { AppComponent } from './app.component';
import { DetalleComponent } from './detalle/detalle.component';
import { PageNotFoundComponent } from './commons/page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { CredencialesComponent } from './credenciales/credenciales.component';
import { LoginComponent } from './login/login.component';
import { ItemResultadoComponent } from './item-resultado/item-resultado.component';
import { BuscarComponent } from './buscar/buscar.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { RegistrarProfesionalComponent } from './registrar-profesional/registrar-profesional.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    PageNotFoundComponent,
    HeaderComponent,
    CredencialesComponent,
    LoginComponent,
    ItemResultadoComponent,
    BuscarComponent,
    RegistrarUsuarioComponent,
    RegistrarProfesionalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    routingProvider
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
