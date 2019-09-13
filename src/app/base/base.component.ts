import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  public product: Product[];

  constructor(private productService: ProductService) {
    this.productService
      .getProduct()
      .valueChanges()
      .subscribe(
        (data: Product[]) => {
          this.product = data;
        },
        error => {
          console.log(error);
        }
      );
  }
  verProduct(item) {
    localStorage.setItem('producto', JSON.stringify(item));
  }

  ngOnInit() {
  }

}
