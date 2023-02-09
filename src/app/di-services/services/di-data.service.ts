import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { DataService } from 'src/app/services/data.service';
import { DEMO_DATA } from '../configs/mock.data';
import { DemoData } from '../interface/demo-interface';
import { DataSource } from '../interface/source-interface';

@Injectable()
export class DiDataService {
  constructor(private dataService: DataService) {}

  getDemoData(): DemoData[] {
    return DEMO_DATA;
  }

  getSource$(): Observable<DataSource[]> {
    return this.dataService
      .get('https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes', {
        params: { startDate: '2020-05-10', endDate: '2020-05-15' },
      })
      .pipe(
        shareReplay(),
        map((data) => (data as any).value.slice(0, 10))
      );
  }
}
