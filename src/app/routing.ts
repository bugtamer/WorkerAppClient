import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleComponent } from './detalle/detalle/detalle.component';

import { PageNotFoundComponent } from './commons/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'detalle', component: DetalleComponent, pathMatch: 'full' },
  { path: '',redirectTo: '/detalle',pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

export const routingProvider: ModuleWithProviders = RouterModule.forRoot(appRoutes);