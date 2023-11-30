import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DsRecetasService } from '../ds-recetas.service';
import { CReceta } from '../Crecetas';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css']
})
export class ListaRecetasComponent {
      rec: CReceta[]= [];
      constructor(private router: Router, private recetasservicio: DsRecetasService){
        this.rec=this.recetasservicio.DRecetas;
      }

      volverHome(){
        this.router.navigate(['']);
      }
}
