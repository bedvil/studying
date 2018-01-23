import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoaderComponent } from './loader.component';
import { LoaderDirective } from './loader.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderDirective,
    LoaderComponent
  ],
  exports: [
    LoaderDirective
  ],
  entryComponents: [
    LoaderComponent
  ]
})
export class LoaderModule { }
