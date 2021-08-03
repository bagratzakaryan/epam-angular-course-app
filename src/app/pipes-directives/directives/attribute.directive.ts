import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Directive({
  selector: '[appHovered]',
  providers: [SharedService],
})
export class AttributeDirective {
  @Input() defaultColor = '';
  @Input() appHovered = '';

  constructor(
    private el: ElementRef // private sharedService: SharedService
  ) {}

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
