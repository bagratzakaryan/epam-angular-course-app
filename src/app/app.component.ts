import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

interface DataSource {
  Customer: string;
  Amount: number;
  Product: string;
  SaleDate: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  color = 'grey';
  title = 'epam-angular-course-app';
  birthday = new Date(1988, 3, 15);
  condition = false;
  source$: Observable<DataSource[]>;

  constructor(private http: HttpClient) {
    this.source$ = this.http
      .get('https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes', {
        params: { startDate: '2020-05-10', endDate: '2020-05-15' },
      })
      .pipe(
        shareReplay(),
        map((data) => (data as any).value.slice(0, 10))
      );
  }
}
