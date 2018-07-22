import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { RegistrarProfesionalComponent } from './componentes/registrar-profesional/registrar-profesional.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { MenuComponent } from './componentes/header/menu/menu.component';

import { PageNotFoundComponent } from './commons/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'buscar', component: BuscarComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'logout', component: LogoutComponent, pathMatch: 'full' },
  { path: 'detalle/:pid', component: DetalleComponent, pathMatch: 'full' },
  { path: 'registrar/usuario', component: RegistrarUsuarioComponent, pathMatch: 'full' },
  { path: 'registrar/profesional', component: RegistrarProfesionalComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/buscar',pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

export const routingProvider: ModuleWithProviders = RouterModule.forRoot(appRoutes);