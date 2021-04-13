import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct';

@Component({
  selector: 'app-products-without-discounts',
  templateUrl: './products-without-discounts.component.html',
  styleUrls: ['./products-without-discounts.component.scss']
})
export class ProductsWithoutDiscountsComponent implements OnInit {

  productsWithoutDiscounts:IProduct[]
  
  constructor() { 
    this.productsWithoutDiscounts = [
      {ID:1, Name:"product without discount 1", Quantity:4, Price:100, Img:"ttt"},
      {ID:2, Name:"product without discount 2", Quantity:10, Price:50, Img:"fff"},
      {ID:3, Name:"product without discount 3", Quantity:7, Price:300, Img:"lll"},
    ];
  }

  ngOnInit(): void {
  }

}
