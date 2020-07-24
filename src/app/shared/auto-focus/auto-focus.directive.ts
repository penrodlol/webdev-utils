import { Directive, ElementRef, Input, OnInit, NgModule } from '@angular/core';

@Directive({
  selector: '[autoFocus]'
})
export class AutoFocusDirective implements OnInit {
  @Input() isFocused: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    if (this.isFocused) { this.el.nativeElement.focus(); }
  }

}

@NgModule({
  declarations: [AutoFocusDirective],
  exports: [AutoFocusDirective]
})
export class AutoFocusModule { }
