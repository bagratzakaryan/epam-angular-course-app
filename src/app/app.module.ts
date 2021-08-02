import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PipesDirectivesModule } from './pipes-directives/pipes-directives.module';
import { DIServicesModule } from './di-services/di-services.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipesDirectivesModule,
    DIServicesModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
