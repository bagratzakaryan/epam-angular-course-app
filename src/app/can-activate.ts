import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

export class UserToken {}
export class Permissions {
  canActivate(user: UserToken, id: string): boolean {
    return false;
  }
}

@Injectable()
export class CanActivateTeam implements CanActivate {
  constructor(
    private permissions: Permissions,
    private currentUser: UserToken
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.permissions.canActivate(this.currentUser, route.params.id);
  }
}
