import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  get(apiUrl: string, params: any): Observable<any> {
    return this.httpClient.get(apiUrl, params);
  }
}
