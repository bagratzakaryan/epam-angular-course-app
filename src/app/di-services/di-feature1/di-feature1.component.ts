import { Component, OnInit } from '@angular/core';
import { DiDataService } from '../services/di-data.service';

@Component({
  selector: 'app-di-feature1',
  templateUrl: './di-feature1.component.html',
  styleUrls: ['./di-feature1.component.css'],
  providers: [DiDataService],
})
export class DiFeature1Component implements OnInit {
  constructor(private diDataService: DiDataService) {
    console.log(this.diDataService.getSource$());
  }

  ngOnInit(): void {}
}
