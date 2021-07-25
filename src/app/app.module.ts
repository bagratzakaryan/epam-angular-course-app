import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HoveredDirective } from './directives/hovered.directive';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
  declarations: [AppComponent, HoveredDirective, UnlessDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
