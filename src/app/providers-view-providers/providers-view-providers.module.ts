import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ProvidersViewProvidersComponent } from './providers-view-providers.component';
import { ChildComponent } from './child/child.component';
import { InspectorComponent } from './inspector/inspector.component';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule],
  declarations: [
    ProvidersViewProvidersComponent,
    ChildComponent,
    InspectorComponent,
  ],
  exports: [
    ProvidersViewProvidersComponent,
    ChildComponent,
    InspectorComponent,
  ],
  providers: [],
})
export class ProvidersViewProvidersModule {}
