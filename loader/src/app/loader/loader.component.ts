import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  loading;

  constructor(
    private elementRef: ElementRef
  ) { }

  getElementRef() {
    return this.elementRef;
  }

}
