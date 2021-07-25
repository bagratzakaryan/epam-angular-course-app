import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHovered]',
})
export class AttributeDirective {
  @Input() defaultColor = '';
  @Input() appHovered = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.hover(this.appHovered || this.defaultColor || 'red', 'white');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hover('', 'black');
  }

  private hover(bgColor: string, fontColor: string) {
    this.el.nativeElement.style.backgroundColor = bgColor;
    this.el.nativeElement.style.color = fontColor;
  }
}
