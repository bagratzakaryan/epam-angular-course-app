import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  property: string;

  constructor() {
    this.property = 'shared info';
    // console.log('initialized');
  }
}
