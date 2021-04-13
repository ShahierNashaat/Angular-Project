import { Injectable } from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Products:IProduct[];
  constructor() { 
    this.Products = [
      {ID: 1, Name:"product1", Quantity:3, Price:50, Img:""},
      {ID: 2, Name:"product2", Quantity:7, Price:100, Img:""},
      {ID: 3, Name:"product3", Quantity:12, Price:200, Img:""}
    ];
  }

  GetAllProducts(): IProduct[]
  {
    return this.Products;
  }

  GetProductById(id:number)
  {
    for(var i=0; i<this.Products.length; i++)
    {
      if(id == this.Products[i].ID)
          return this.Products[i];
    }
    return null;
  }
}
