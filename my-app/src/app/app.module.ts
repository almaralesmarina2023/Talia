import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecetaComponent } from './receta/receta.component';
import { ListaRecetasComponent } from './lista-recetas/lista-recetas.component';
import { DetallesRecetaComponent } from './detalles-receta/detalles-receta.component';
import { AppRoutingModule } from './app-routing.module';
import { DetallesComponent } from './detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    ListaRecetasComponent,
    DetallesRecetaComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
