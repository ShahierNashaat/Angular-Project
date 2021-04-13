import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWithDiscountsComponent } from './products-with-discounts.component';

describe('ProductsWithDiscountsComponent', () => {
  let component: ProductsWithDiscountsComponent;
  let fixture: ComponentFixture<ProductsWithDiscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsWithDiscountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsWithDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
