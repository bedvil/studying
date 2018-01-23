import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnomaliesComponent } from './anomalies/anomalies.component';


const routes: Routes = [
  {
    path: 'test',
    component: AnomaliesComponent
  },
  {
    path: '',
    redirectTo: 'test',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}