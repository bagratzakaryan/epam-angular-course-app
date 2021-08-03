import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  property: string;

  constructor() {
    this.property = 'shared info';
    console.log('initialized');
  }
}
