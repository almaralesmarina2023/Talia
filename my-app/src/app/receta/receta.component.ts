import { Component, Input } from '@angular/core';
import { CReceta } from '../Crecetas';
@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent {

  @Input() receta_una : CReceta =  new CReceta("", [], "", "")

}
