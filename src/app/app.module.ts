import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AttributeDirective } from './directives/attribute.directive';
import { StructuralDirective } from './directives/structural.directive';
import { ExponentialPipe } from './pipes/exponential-strength.pipe';
import { Feature1Component } from './feature1/feature1.component';
import { Feature2Component } from './feature2/feature2.component';
import { DirectiveUsageComponent } from './directive-usage/directive-usage.component';
import { PipeUsageComponent } from './pipe-usage/pipe-usage.component';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialPipe,
    AttributeDirective,
    StructuralDirective,
    Feature1Component,
    Feature2Component,
    DirectiveUsageComponent,
    PipeUsageComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
