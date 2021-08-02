import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesDirectivesModule } from './pipes-directives/pipes-directives.module';
import { DIServicesModule } from './di-services/di-services.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PipesDirectivesModule, DIServicesModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
