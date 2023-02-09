import { Component, Injector, OnInit } from '@angular/core';
import { APP_CONFIG } from '../configs/app.config';
import { DiDataService } from '../services/di-data.service';

@Component({
  selector: 'app-di-feature2',
  templateUrl: './di-feature2.component.html',
  styleUrls: ['./di-feature2.component.css'],
  providers: [DiDataService],
})
export class DiFeature2Component implements OnInit {
  constructor(private injector: Injector) {
    console.log(this.injector.get(DiDataService));
    console.log(this.injector.get(APP_CONFIG));
  }

  ngOnInit(): void {}
}
