import { Component,Input } from '@angular/core';
import { gridInfo } from '../models/grid-info';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.css'
})
export class CardGridComponent {

  @Input('productInfo') productInfo:gridInfo | undefined;
  @Input('productId') productId:number | undefined;
 
}
