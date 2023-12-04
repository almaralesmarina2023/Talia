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
      preparacion: "Salcoche tantos huevos duros como desee preparar. Quíteles la cáscara y déjelos enfriar. Córtelos por la mitad y saque con cuidado las yemas.",
      rutaimagen: "./assets/receta2.jpg" 
    },

    {
      nombre: "Chicharrones de cerdo",
      ingredientes: [
        "2 lb. de grasa de cerdo cortada en cuadrados",
        "sal y agua"
      ],
      preparacion: "Corte la grasa del cerdo en cuadrados pequeños, póngala en una olla y añádale sal al gusto. Cúbralos con agua. Poner a hervir a fuego lento, hasta que el agua se consuma y con la grasa que va soltando se van friendo hasta que queden crujientes.",
      rutaimagen: "./assets/receta5.jpg" 
    },

    {
      nombre: "Mariquitas (chicharritas) de plátano o malanga",
      ingredientes: [
        "1 plátano verde (o una malanga)"
      ],
      preparacion: "Se pela el plátano o la malanga o y se corta en rueditas muy finas.",
      rutaimagen: "./assets/receta3.jpg" 
    },

    {
      nombre: "Croquetas de pollo",
      ingredientes: [
        "1 Pollo asado",
        "1 libra de mantequilla",
        "1 cucharadita de cebolla molida o cortada en cuadritos pequeños",
        "2 tazas de leche",
        "9 cucharadas de harina de trigo",
        "1 cucharadita de sal",
        "1/4 de cucharadita de pimienta",
        "1 cucharada de Vino Seco",
        "4 huevos",
        "2 tazas de galleta o pan molido",
        "Aceite suficiente para freír"
      ],
      preparacion: "Sofría la cebolla en la mantequilla. Mezcle la leche con la harina, sal y pimienta. Añada esta mezcla a la mantequilla y cebolla y manténgala al fuego revolviendo hasta que tome espesor de crema doble.",
      rutaimagen: "./assets/receta4.jpg" 
    }
  ]


  constructor() { }

  encontrarReceta(index:number){
    return this.DRecetas[index];
  }
}
