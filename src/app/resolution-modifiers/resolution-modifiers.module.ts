import { OptionalComponent } from './optional/optional.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ResolutionModifiersComponent } from './resolution-modifiers.component';
import { SelfNoDataComponent } from './self-no-data/self-no-data.component';
import { HostComponent } from './host/host.component';
import { SelfComponent } from './self/self.component';
import { SkipselfComponent } from './skipself/skipself.component';
import { HostParentComponent } from './host-parent/host-parent.component';
import { HostChildComponent } from './host-child/host-child.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule],
  declarations: [
    ResolutionModifiersComponent,
    OptionalComponent,
    SelfComponent,
    SelfNoDataComponent,
    HostComponent,
    SkipselfComponent,
    HostParentComponent,
    HostChildComponent,
  ],
  exports: [
    ResolutionModifiersComponent,
    OptionalComponent,
    SelfComponent,
    SelfNoDataComponent,
    HostComponent,
    SkipselfComponent,
    HostParentComponent,
    HostChildComponent,
  ],
  providers: [],
})
export class ResolutionModifiersModule {}
