import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './providers-view-providers.component';
import { ChildComponent } from './child/child.component';
import { InspectorComponent } from './inspector/inspector.component';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule],
  declarations: [ChildComponent, InspectorComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class ProvidersViewProvidersModule {}
