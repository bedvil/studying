import { Component, OnInit, Input } from '@angular/core';
import { ViewContainerRef } from '@angular/core/src/linker/view_container_ref';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  @Input() loading;

  constructor() { }

}
