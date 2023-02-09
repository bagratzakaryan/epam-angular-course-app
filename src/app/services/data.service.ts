import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpMethods } from '../enums/http-methods.enum';
import { QueryParams } from '../interfaces/query-params';
import { CustomDataService } from './custom-data.service';

@Injectable({
  providedIn: 'root',
})
export class DataService extends CustomDataService {
  get<T>(apiUrl: string, params: QueryParams | any): Observable<T> {
    return this.execute(HttpMethods.GET, apiUrl, params);
  }
}
