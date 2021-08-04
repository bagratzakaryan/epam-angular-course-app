import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesDirectivesModule } from './pipes-directives/pipes-directives.module';
import { DIServicesModule } from './di-services/di-services.module';
import { SharedService } from './shared.service';
import { ProvidersViewProvidersModule } from './providers-view-providers/providers-view-providers.module';
import { ResolutionModifiersModule } from './resolution-modifiers/resolution-modifiers.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PipesDirectivesModule,
    DIServicesModule,
    ProvidersViewProvidersModule,
    ResolutionModifiersModule,
  ],
  // providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
