import { Component, Inject, OnInit } from '@angular/core';
import { APP_CONFIG } from '../configs/app.config';
import { AppConfig } from '../interface/config-interface';

@Component({
  selector: 'app-di-feature2',
  templateUrl: './di-feature2.component.html',
  styleUrls: ['./di-feature2.component.css'],
})
export class DiFeature2Component implements OnInit {
  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig) {
    // debugger;
  }

  ngOnInit(): void {}
}
