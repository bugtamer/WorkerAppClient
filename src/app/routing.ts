import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { BuscarComponent } from './buscar/buscar.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { RegistrarProfesionalComponent } from './registrar-profesional/registrar-profesional.component';
import { DetalleComponent } from './detalle/detalle.component';

import { PageNotFoundComponent } from './commons/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'buscar', component: BuscarComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'detalle', component: DetalleComponent, pathMatch: 'full' },
  { path: 'registrar/usuario', component: RegistrarUsuarioComponent, pathMatch: 'full' },
  { path: 'registrar/profesional', component: RegistrarProfesionalComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/buscar',pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

export const routingProvider: ModuleWithProviders = RouterModule.forRoot(appRoutes);