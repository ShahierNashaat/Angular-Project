import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { DiscountOffers } from '../Shared Classes and types/DiscountOffers ';
import { ICategory } from '../Shared Classes and types/ICategory';
import { IProduct } from '../Shared Classes and types/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  Discount:DiscountOffers
  StoreName:string
  StoreLogo:string
  ProductList:Array<IProduct>
  CategoryList:ICategory[]
  ClientName:string
  IsPurshased:boolean
  IsRendered:boolean;

  constructor(private productService:ProductService, private router:Router, private activatedRoute:ActivatedRoute) 
  { 
    this.Discount = DiscountOffers.NoDiscount;
    this.StoreName = "Store"
    this.StoreLogo = "../../assets/images/logo.png"
    this.CategoryList = [
      {ID: 1, Name:"cat1"},
      {ID: 2, Name:"cat2"},
      {ID: 3, Name:"cat3"}
    ]
    this.ClientName = "Client"
    this.IsPurshased = false
    this.IsRendered = true
    this.ProductList = this.productService.GetAllProducts();
  }

  ngOnInit(): void {
  }

  buy()
  {
    this.IsPurshased = true;
  }

  renderValues()
  {
    this.ProductList = this.productService.GetAllProducts();
    this.IsRendered = true
  }

  getProductById(id:number)
  {
    var product = this.productService.GetProductById(id);
    if(product != null)
      this.ProductList = [product]
    else
      this.ProductList = []

    this.IsRendered = true
  }

  goToProductsWithDiscounts()
  {
    this.router.navigate(['WithDiscounts'],{relativeTo:this.activatedRoute})
  }

  goToProductsWithoutDiscounts()
  {
    this.router.navigate(['WithoutDiscounts'],{relativeTo:this.activatedRoute})
  }
}
