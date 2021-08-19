import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ProvidersViewProvidersComponent } from './providers-view-providers.component';
import { ChildComponent } from './child/child.component';
import { InspectorComponent } from './inspector/inspector.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    component: ProvidersViewProvidersComponent,
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(ROUTES)],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
