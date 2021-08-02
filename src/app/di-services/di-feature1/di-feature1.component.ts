import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/Data.service';

@Component({
  selector: 'app-di-feature1',
  templateUrl: './di-feature1.component.html',
  styleUrls: ['./di-feature1.component.css'],
  providers: [DataService],
})
export class DiFeature1Component implements OnInit {
  constructor(private dataService: DataService) {
    console.log(this.dataService.getSource$());
    // debugger;
  }

  ngOnInit(): void {}
}
