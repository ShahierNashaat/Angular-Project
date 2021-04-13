import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../customeValidators/name.Validators';
import { ProductService } from '../services/product.service';
import { IProduct } from '../Shared Classes and types/IProduct';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  ProductList:Array<IProduct>

  notesForm=this.fb.group({
    name :['', [Validators.required, ForbiddenNameValidator(/adminstrator/), ForbiddenNameValidator(/admin/)]],
    product:['', [Validators.required]],
    thisProductContainDiscount:[false],
    discount:[0],
    comments:this.fb.array([])
  })

  get name(){
    return this.notesForm.get("name");
  }

  get product(){
    return this.notesForm.get("product");
  }

  get thisProductContainDiscount(){
    return this.notesForm.get("thisProductContainDiscount");
  }

  get discount(){
    return this.notesForm.get("discount");
  }

  get comments ()
  {
    return this.notesForm.get('comments') as FormArray;
  }

  constructor(private fb:FormBuilder, private productService:ProductService) { 
    this.ProductList = this.productService.GetAllProducts();
  }

  ngOnInit(): void {
  }

  enterDiscount(){
    this.notesForm.get('thisProductContainDiscount')?.valueChanges.subscribe(checkedValue => {
      if(checkedValue)
      {
        this.discount?.setValidators(Validators.required);
      }
      else{
        this.discount?.clearValidators();
      }
      this.discount?.updateValueAndValidity();
    });
  }

  addComment()
  {
    this.comments.push(this.fb.control(''));
  }

  removeComment(commentIndex:number)
  {
    this.comments.removeAt(commentIndex);
  }
}
