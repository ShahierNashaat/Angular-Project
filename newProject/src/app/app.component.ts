import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newProject';
  // @ViewChild(ProductsComponent) productsComponent : ProductsComponent;

  ngAfterViewInit()
  {
    // this.productsComponent.IsPurshased;

  }

  getProducts()
  {
    // this.productsComponent.renderValues();
  }

  getProductById(id:string)
  {
    // this.productsComponent.getProductById(parseInt(id));
  }
}
