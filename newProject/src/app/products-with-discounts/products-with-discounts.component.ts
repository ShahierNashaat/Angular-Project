import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct';

@Component({
  selector: 'app-products-with-discounts',
  templateUrl: './products-with-discounts.component.html',
  styleUrls: ['./products-with-discounts.component.scss']
})
export class ProductsWithDiscountsComponent implements OnInit {

  productsWithDiscounts:IProduct[]

  constructor() { 
    this.productsWithDiscounts = [
      {ID:1, Name:"product with discount 1", Quantity:4, Price:100, Img:"ttt"},
      {ID:2, Name:"product with discount 2", Quantity:10, Price:50, Img:"fff"},
      {ID:3, Name:"product with discount 3", Quantity:7, Price:300, Img:"lll"},
    ];
  }

  ngOnInit(): void {
  }

}
