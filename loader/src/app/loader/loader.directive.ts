import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnDestroy, ViewContainerRef } from '@angular/core';

import { LoaderComponent } from './loader.component';

@Directive({
  selector: '[appLoader]'
})
export class LoaderDirective implements OnDestroy {

  private componentInstance: ComponentRef<LoaderComponent> = null;

  @Input()
  set appLoader(loading: boolean) {
    this.toggleLoader(loading);
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  toggleLoader(loading: boolean) {
    if (!this.componentInstance) {
      this.createLoaderComponent();
      // Angular ALWAYS creates a new component as a sibling, and i'm manually making it a child.
      // if it's ok in you case, just remove this this.makeComponentAChild() and also the function
      // getElementRef() inside the loader.component.ts
      this.makeComponentAChild();
    }

    this.componentInstance.instance.loading = loading;
  }

  private createLoaderComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(LoaderComponent);
    this.componentInstance = this.viewContainerRef.createComponent(componentFactory);
  }

  private makeComponentAChild(){
    const loaderComponentElement = this.componentInstance.instance.getElementRef().nativeElement;
    const sibling: HTMLElement = loaderComponentElement.previousSibling;
    sibling.insertBefore(loaderComponentElement, sibling.firstChild);
  }

  ngOnDestroy(): void {
    if (this.componentInstance) {
      this.componentInstance.destroy();
    }
  }

}
