import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesRecetaComponent } from './detalles-receta/detalles-receta.component';
import { RouterModule, Routes } from '@angular/router';
import { ListaRecetasComponent } from './lista-recetas/lista-recetas.component';
import { RecetaComponent } from './receta/receta.component';
import { DetallesComponent } from './detalles/detalles.component';

const appRoutes: Routes = [
    {path: 'lr', component:ListaRecetasComponent},
    {path: 'pf', component:DetallesComponent}

    //{path: '**', component:ErrorComponent}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
