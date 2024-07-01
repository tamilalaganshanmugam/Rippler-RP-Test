import { Component } from '@angular/core';
import { ServiceService } from './shared/service.service';
import { gridInfo } from './models/grid-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Rippler-RP';

  constructor(private apiService: ServiceService) {}
  public ProductList: gridInfo[] | undefined;

  ngOnInit() {
    this.apiService.getGridInfo().subscribe(
      (data: any) =>{
        this.ProductList = data.data;
      }
    );
  }
}