import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CustomDataService } from '../services/custom-data.service';
import { HttpMethods } from '../enums/http-methods.enum';

@Injectable()
export class GithubUserService extends CustomDataService {
  private url = 'https://api.github.com/users';

  getUsers(): Observable<any> {
    return this.execute(HttpMethods.GET, this.url).pipe(delay(2000));
  }
}
