import { Component, OnInit } from '@angular/core';
import { category, Product } from '../interfaces/Product';
import { ProductService } from '../services/product.service';
import { NgForm } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  imgName: any = '';
  LinkImage: any = '';
  public categoria = Object.keys(category)
    .slice(Object.keys(category).length / 2)
    .map(key => ({
      label: key,
      key: category[key]
    }));
  constructor(private productService: ProductService) {}

  ngOnInit() {}

  private newProduct(productFormValue) {
    const key = this.productService.addProduct(productFormValue).key;
    const productFormValueKey = {
      ...productFormValue,
      key,
    };
  }
  onSubmit(productForm: NgForm) {
    const productFormValue = { ...productForm.value, image: this.LinkImage};
    if (productForm.valid) {
    }
    this.newProduct(productFormValue);
    alert('Producto Creado Correctamente');
  }

  /*Agregar imagen*/
  fileChangeEvent(event: any): void {
    this.imgName =  event.target.files[0].name,
    this.LinkImage = 'assets/img/product/' + this.imgName,
     this.imageChangedEvent = event,
     console.log(this.imgName);
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
