import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecetaComponent } from './receta/receta.component';
import { ListaRecetasComponent } from './lista-recetas/lista-recetas.component';
import { DetallesRecetaComponent } from './detalles-receta/detalles-receta.component';
import { AppRoutingModule } from './app-routing.module';
import { DetallesComponent } from './detalles/detalles.component';
import { DsRecetasService } from './ds-recetas.service';

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
  providers: [DsRecetasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
