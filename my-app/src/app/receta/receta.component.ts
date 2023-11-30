import { Component, Input } from '@angular/core';
import { CReceta } from '../Crecetas';
import { DsRecetasService } from '../ds-recetas.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent {


  @Input() receta_una : CReceta =  new CReceta("", [""], "", "");
  @Input() indice:number = 0;

  constructor(private miservicio: DsRecetasService){

  }

}
