import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Injectable()
export class TesteService {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events
      .filter(e => e instanceof NavigationEnd)
      .map(e => this.route.root.firstChild.snapshot.data.analytics.pageName)
      .subscribe(this.onRouteChanged)
  }
  onRouteChanged(pageName: string) {
    
    // do some stuff with the page name
  }
}
