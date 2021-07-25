import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';

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
  source$: Observable<any>;

  constructor(private http: HttpClient) {
    const param = {
      params: { startDate: '2020-05-10', endDate: '2020-05-15' },
    };

    this.source$ = this.http
      .get(
        'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
        param
      )
      .pipe(
        shareReplay(),
        map((data) => (data as any).value.slice(0, 10))
      );
  }
}
