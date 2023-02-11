import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-control-name',
  templateUrl: './form-control-name.component.html',
  styleUrls: ['./form-control-name.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormControlNameComponent),
      multi: true,
    },
  ],
})
export class FormControlNameComponent implements ControlValueAccessor {
  value = '';

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
