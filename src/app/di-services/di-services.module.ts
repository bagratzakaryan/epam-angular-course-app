import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIServicesComponent } from './di-services.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DIServicesComponent],
  exports: [DIServicesComponent],
})
export class DIServicesModule {}
