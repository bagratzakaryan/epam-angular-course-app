import { HttpClientModule } from '@angular/common/http';
import { NgModule, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompilerConfig } from '@angular/compiler';

import { DirectiveUsageComponent } from './directive-usage/directive-usage.component';
import { AttributeDirective } from './directives/attribute.directive';
import { StructuralDirective } from './directives/structural.directive';
import { Feature1Component } from './feature1/feature1.component';
import { Feature2Component } from './feature2/feature2.component';
import { PipeUsageComponent } from './pipe-usage/pipe-usage.component';
import { ExponentialPipe } from './pipes/exponential-strength.pipe';
import { PipesDirectivesComponent } from './pipes-directives.component';

@NgModule({
  imports: [HttpClientModule, CommonModule],
  declarations: [
    ExponentialPipe,
    AttributeDirective,
    StructuralDirective,
    Feature1Component,
    Feature2Component,
    DirectiveUsageComponent,
    PipeUsageComponent,
    PipesDirectivesComponent,
  ],
  exports: [
    ExponentialPipe,
    AttributeDirective,
    StructuralDirective,
    Feature1Component,
    Feature2Component,
    DirectiveUsageComponent,
    PipeUsageComponent,
    PipesDirectivesComponent,
  ],
  providers: [
    {
      provide: CompilerConfig,
      useValue: new CompilerConfig({
        defaultEncapsulation: ViewEncapsulation.ShadowDom,
      }),
    },
    { provide: ViewEncapsulation, useValue: ViewEncapsulation.ShadowDom },
  ],
})
export class PipesDirectivesModule {}
