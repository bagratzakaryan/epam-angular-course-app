import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.css'],
  // encapsulation: ViewEncapsulation.None,
  // encapsulation: ViewEncapsulation.Emulated
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Feature1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
