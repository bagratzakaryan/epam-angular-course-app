import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Directive({
  selector: '[appUnless]',
  providers: [StateService],
})
export class StructuralDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef // private stateService: StateService
  ) {}

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
