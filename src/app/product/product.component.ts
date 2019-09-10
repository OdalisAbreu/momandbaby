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
  public categoria = Object.keys(category).slice(Object.keys(category).length / 2)
  .map(key => ({
    label: key,
    key: category[key]
  }));
  constructor(private productService: ProductService) {}

  ngOnInit() {
    console.log(this.categoria);
  }

  private newProduct(productFormValue) {
    const key = this.productService.addProduct(productFormValue).key;
    const productFormValueKey = {
      ...productFormValue,
      key
    };
  }
  newImage(imageForm: NgForm) {
    console.log(this.imageChangedEvent);
  }
  onSubmit(productForm: NgForm) {
    const productFormValue = { ...productForm.value };
    if (productForm.valid) {
    }
    this.newProduct(productFormValue);
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
