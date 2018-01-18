import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  loading = true;

  constructor() {
    this.getTitle().subscribe(title => this.title = title)
   }

  getTitle() {
    return Observable
    .of('app')
    .delay(1000)
    .finally(() => this.loading = false)
  }

}
