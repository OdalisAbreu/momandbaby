import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-create-produc',
  templateUrl: './create-produc.component.html',
  styleUrls: ['./create-produc.component.css']
})
export class CreateProducComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  constructor() { }

  ngOnInit() {
  }



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
}
