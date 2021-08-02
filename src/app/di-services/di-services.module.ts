import { NgModule } from '@angular/core';

import { DIServicesComponent } from './di-services.component';
import { DiFeature1Component } from './di-feature1/di-feature1.component';
import { DiFeature2Component } from './di-feature2/di-feature2.component';
import { DiFeature3Component } from './di-feature3/di-feature3.component';
import { APP_CONFIG } from './configs/app.config';

@NgModule({
  declarations: [
    DIServicesComponent,
    DiFeature1Component,
    DiFeature2Component,
    DiFeature3Component,
  ],
  providers: [{ provide: APP_CONFIG, useValue: APP_CONFIG }],
  exports: [DIServicesComponent],
})
export class DIServicesModule {}
