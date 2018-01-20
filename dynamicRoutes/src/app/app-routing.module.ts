import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

const routes: Routes = [
  { path: 'a', component: AComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(router: Router) {
    const config = router.config;
    config.push({path: 'b', component: BComponent});
    router.resetConfig(config);
  }
 }
