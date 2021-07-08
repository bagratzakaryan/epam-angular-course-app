import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HightlighDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
