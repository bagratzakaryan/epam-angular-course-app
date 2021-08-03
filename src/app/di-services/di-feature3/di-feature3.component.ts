import { Component, Inject, Injector, OnInit } from '@angular/core';
import { APP_CONFIG } from '../configs/app.config';
import { AppConfig } from '../interface/config-interface';

@Component({
  selector: 'app-di-feature3',
  templateUrl: './di-feature3.component.html',
  styleUrls: ['./di-feature3.component.css'],
})
export class DiFeature3Component implements OnInit {
  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig) {}

  ngOnInit(): void {}
}
