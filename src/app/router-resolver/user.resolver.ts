import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { GithubUserService } from './github-user.service';

@Injectable()
export class UserResolver implements Resolve<Observable<any>> {
  constructor(private userService: GithubUserService) {}

  resolve(): Observable<any> {
    return this.userService.getUsers();
  }
}
