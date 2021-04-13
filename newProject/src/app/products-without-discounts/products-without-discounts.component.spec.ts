import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWithoutDiscountsComponent } from './products-without-discounts.component';

describe('ProductsWithoutDiscountsComponent', () => {
  let component: ProductsWithoutDiscountsComponent;
  let fixture: ComponentFixture<ProductsWithoutDiscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsWithoutDiscountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsWithoutDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
