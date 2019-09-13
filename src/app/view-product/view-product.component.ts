import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  producto = {};
  vista = true;
  constructor(public router: Router, public activa: ActivatedRoute, public data: ProductService) {
      this.producto = JSON.parse(localStorage.getItem('producto'));
      console.log(this.producto);
    }

  ngOnInit() {
  }

}
