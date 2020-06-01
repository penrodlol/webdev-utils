import { Directive, Input, Component, ComponentFactory, ComponentFactoryResolver, ViewContainerRef, OnInit, Type, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appDialogComponentInjector]'
})
export class DialogComponentInjectorDirective implements OnInit, OnDestroy {
  @Input() dialogComponentInjection: Type<Component>;

  dialogComponentFactory: ComponentFactory<Component>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(this.dialogComponentInjection);
    this.viewContainerRef.createComponent(this.dialogComponentFactory);
  }

  ngOnDestroy(): void {
    this.viewContainerRef.clear();
  }

}
