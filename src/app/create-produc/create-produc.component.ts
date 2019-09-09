import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { Product, category } from '../interfaces/Product';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-create-produc',
  templateUrl: './create-produc.component.html',
  styleUrls: ['./create-produc.component.css']
})
export class CreateProducComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  public products$: Observable<Product[]>;
  public selectedProduct: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.products$ = this.productService.getproducts();
      this.productService.getproducts().pipe(take(1)).subscribe(products => {
          if (products.length === 0) {
              const product: Product = {
                  idProduct: '12',
                  name: 'Primer Producto',
                  description: 'Nuestro primer producto',
                  price: 10,
                  color: 'White',
                  size: 'Xl',
                  quantity: 5,
                  category: category.base,
                  active: false

              };
          }
      });

    //   newProduct() {
    //     this.selectedProduct = null;
    //     setTimeout(() => {
    //         window.location.replace('#open');
    //     });
    //  }
  }


  /*Agregar imagen*/
fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
}
imageLoaded() {
    // show cropper
}
cropperReady() {
    // cropper ready
}
loadImageFailed() {
    // show message
}
/*Agregar imagen*/
}
