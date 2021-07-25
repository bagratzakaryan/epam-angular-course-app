import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AttributeDirective } from './directives/attribute.directive';
import { StructuralDirective } from './directives/structural.directive';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    AttributeDirective,
    StructuralDirective,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
