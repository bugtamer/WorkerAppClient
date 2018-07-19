import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DetalleComponent } from './detalle/detalle/detalle.component';
import { PageNotFoundComponent } from './commons/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
