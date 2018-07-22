import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routingProvider } from './routing';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { PageNotFoundComponent } from './commons/page-not-found/page-not-found.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CredencialesComponent } from './componentes/credenciales/credenciales.component';
import { LoginComponent } from './componentes/login/login.component';
import { ItemResultadoComponent } from './componentes/item-resultado/item-resultado.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { RegistrarProfesionalComponent } from './componentes/registrar-profesional/registrar-profesional.component';
import { MenuComponent } from './componentes/header/menu/menu.component';
import { LogoComponent } from './componentes/header/logo/logo.component';
import { LogoutComponent } from './componentes/logout/logout.component';


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
    RegistrarProfesionalComponent,
    MenuComponent,
    LogoComponent,
    LogoutComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    routingProvider
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
