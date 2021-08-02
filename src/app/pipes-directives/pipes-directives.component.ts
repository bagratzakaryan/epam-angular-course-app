import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';

interface DataSource {
  Customer: string;
  Amount: number;
  Product: string;
  SaleDate: Date;
}

@Component({
  selector: 'app-pipes-directives',
  templateUrl: './pipes-directives.component.html',
  styleUrls: ['./pipes-directives.component.css'],
})
export class PipesDirectivesComponent implements OnInit {
  switch_expression = ['case_1', 'case_2'];
  condition = false;
  source: DataSource[] = [];

  constructor(private http: HttpClient) {
    this.http
      .get('https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes', {
        params: { startDate: '2020-05-10', endDate: '2020-05-15' },
      })
      .pipe(
        shareReplay(),
        map((data) => (data as any).value.slice(0, 10))
      )
      .subscribe((data: DataSource[]) => {
        this.source = data;
      });
  }

  ngOnInit() {
    console.log(this);
  }
}
