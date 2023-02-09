import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpMethods } from '../enums/http-methods.enum';
import { QueryParams } from '../interfaces/query-params';

export class CustomDataService {
  private http = inject(HttpClient);

  protected execute<T>(
    method: HttpMethods,
    url: string,
    params?: QueryParams | any,
    options?: any
  ): Observable<any> {
    switch (method) {
      case HttpMethods.GET:
        return this.http.get(url, params);
      case HttpMethods.POST:
        return this.http.post<T>(url, params, options);
      case HttpMethods.PUT:
        return this.http.put<T>(url, params, options);
      case HttpMethods.DELETE:
        return this.http.delete<T>(url, params);
      default:
        return this.http.get<T>(url, params);
    }
  }
}
