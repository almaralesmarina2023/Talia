import { Injectable } from '@angular/core';
import { CReceta } from './Crecetas';

@Injectable({
  providedIn: 'root'
})
export class DsRecetasService {
  
  DRecetas : CReceta[]=[
    {
      nombre: "Ensalada de pollo",
      ingredientes: [
        "1 Pollo asado", 
        "1 libra de papas hervidas", 
        "1 taza de mayonesa", 
        "1/3 taza de cebolla cruda picadita",
        "1/3 taza de ají pimiento",
        "1/3 taza de cebollinos picaditos",
        "1/3 taza de petit pois (guisantes)",
        "1/3 taza de apio picadito",
        "Sal y pimienta al gusto"
      ],
      preparacion: "Desmenuce el pollo y mézclelo con los demás ingredientes. Póngala a enfriar en el refrigerador. Sírvala adornada con huevos y las tiras de ají pimiento. Da para 8 raciones.",
      rutaimagen: "./assets/receta1.jpg" 
    },

    {
      nombre: "Huevos rellenos",
      ingredientes: [
        "Huevos de gallina",
        "Mayonesa",
        "1 queso crema",
        "1 cebolla",
        "1 lata de carne prensada (o atún)",
        "Sal y pimienta al gusto"
      ],
      preparacion: "",
      rutaimagen: "./assets/receta2.jpg" 
    }
  ]


  constructor() { }

  encontrarReceta(index:number){
    return this.DRecetas[index];
  }
}
