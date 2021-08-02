import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpService } from 'src/app/http.service';

interface DataSource {
  Customer: string;
  Amount: number;
  Product: string;
  SaleDate: Date;
}

@Component({
  selector: 'app-pipe-usage',
  templateUrl: './pipe-usage.component.html',
  styleUrls: ['./pipe-usage.component.css'],
})
export class PipeUsageComponent implements OnInit {
  birthday = new Date(1988, 3, 15);
  source$: Observable<DataSource[]>;

  constructor(private httpService: HttpService) {
    this.source$ = this.httpService
      .get('https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes', {
        params: { startDate: '2020-05-10', endDate: '2020-05-15' },
      })
      .pipe(
        shareReplay(),
        map((data) => (data as any).value.slice(0, 10))
      );
  }

  ngOnInit(): void {}
}
