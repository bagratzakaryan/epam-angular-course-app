import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-feature2',
  templateUrl: './feature2.component.html',
  styleUrls: ['./feature2.component.css'],
  // encapsulation: ViewEncapsulation.None,
  // encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class Feature2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
