import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: '<h1 *ngIf="!hidden">Funcionou</h1>'
})
export class LoaderComponent implements OnInit {

  @Input() hidden = true;

  constructor() { }

  ngOnInit() {
  }

}
