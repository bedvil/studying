import { Directive, Input, ElementRef, Renderer2, Inject, ComponentFactoryResolver, ViewRef, ViewContainerRef, ComponentFactory, ComponentRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { loadavg } from 'os';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  selector: '[appLoader]',
})
export class LoaderDirective implements OnDestroy {

  componentRef: ComponentRef<LoaderComponent>;

  @Input()
  set appLoader(loading: boolean) {
    this.toggle(loading)
  }

  constructor(
    private resolver: ComponentFactoryResolver,
    private viewRef: ViewContainerRef
  ) { }

  toggle(loading: boolean) {

    if (loading) {
      if (!this.componentRef) {
        this.createComponent();
      }
      this.componentRef.instance.hidden = false;
    } else {
      this.componentRef.instance.hidden = true;
    }
  }

  createComponent(): void {
    const componenet = this.resolver.resolveComponentFactory(LoaderComponent);
    this.componentRef = this.viewRef.createComponent(componenet);
  }

  ngOnDestroy(): void {
    this.componentRef.destroy();
  }

}
