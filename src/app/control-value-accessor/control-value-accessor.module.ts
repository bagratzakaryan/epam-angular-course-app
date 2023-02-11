import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ControlValueAccessorComponent } from './control-value-accessor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './form-control/form-control.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { FormControlNameComponent } from './form-control-name/form-control-name.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ControlValueAccessorComponent,
    children: [
      {
        path: 'control-value-accessor',
        component: ControlValueAccessorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    ControlValueAccessorComponent,
    FormControlComponent,
    NgModelComponent,
    FormControlNameComponent,
  ],
})
export class ControlValueAccessorModule {}
