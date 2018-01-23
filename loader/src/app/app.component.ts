import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  loading = true;

  constructor(
    private http: HttpClient
  ) {
    this.getTitle().subscribe(title => this.title = title)
   }

  getTitle() {
    this.http.get('a').subscribe(console.log);
    return Observable
    .of('app')
    .delay(1000)
    .finally(() => this.loading = false)
  }

}
