import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-control-value-accessor',
  templateUrl: './control-value-accessor.component.html',
  styleUrls: ['./control-value-accessor.component.css'],
})
export class ControlValueAccessorComponent {
  formGroup = new FormGroup({
    firstName: new FormControl('Name 1'),
    lastName: new FormControl('Surname 1'),
    address: new FormControl('Address 1'),
  });

  external = '';

  constructor() {
    this.formGroup.valueChanges.subscribe(console.log);
  }

  get firstNameControl(): FormControl {
    return this.formGroup.get('firstName') as FormControl;
  }

  // get lastNameControl(): FormControl {
  //   return this.formGroup.get('lastName') as FormControl;
  // }

  get addressControl(): FormControl {
    return this.formGroup.get('address') as FormControl;
  }
}
