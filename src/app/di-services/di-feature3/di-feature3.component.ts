import { Component, Injector, OnInit } from '@angular/core';
import { APP_CONFIG } from '../configs/app.config';
import { DataService } from '../services/Data.service';

@Component({
  selector: 'app-di-feature3',
  templateUrl: './di-feature3.component.html',
  styleUrls: ['./di-feature3.component.css'],
  providers: [DataService],
})
export class DiFeature3Component implements OnInit {
  constructor(private injector: Injector) {
    console.log(this.injector.get(DataService));
    console.log(this.injector.get(APP_CONFIG));
  }

  ngOnInit(): void {}
}
