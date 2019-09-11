import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-create-produc',
  templateUrl: './create-produc.component.html',
  styleUrls: ['./create-produc.component.css']
})
export class CreateProducComponent implements OnInit {
  selectFile = null;
  constructor() {}

  onFileSelected(event) {
    console.log(event.target.files[0].name);
    this.selectFile = event.target.files[0];
  }
  onUpload() {}

  ngOnInit() {}
}
