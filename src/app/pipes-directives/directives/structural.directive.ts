import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Directive({
  selector: '[appUnless]',
  providers: [SharedService],
})
export class StructuralDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) // private sharedService: SharedService
  {}

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
