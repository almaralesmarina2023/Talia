import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DsRecetasService } from '../ds-recetas.service';
import { CReceta } from '../Crecetas';

@Component({
  selector: 'app-detalles-receta',
  templateUrl: './detalles-receta.component.html',
  styleUrls: ['./detalles-receta.component.css']
})
export class DetallesRecetaComponent {

  indice : number = 0;

  cuadroNombre:string="";
  cuadroIngredientes: string[]=[];
  cuadropreparacion:string="";
  cuatroImagen:string="";

  constructor(private router:Router , private route:ActivatedRoute, private dsservice: DsRecetasService){

  }

  ngOnInit(){
    this.indice=this.route.snapshot.params['id'];
    let receta: CReceta =  this.dsservice.encontrarReceta(this.indice);

    this.cuadroNombre=receta.nombre;
    this.cuadroIngredientes=receta.ingredientes;
    this.cuadropreparacion=receta.preparacion;
    this.cuatroImagen=receta.rutaimagen;
  }

}
