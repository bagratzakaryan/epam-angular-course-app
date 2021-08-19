import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

export class UserToken {}
export class Permissions {
  canLoadChildren(
    user: UserToken,
    id: string,
    segments: UrlSegment[]
  ): boolean {
    return true;
  }
}

@Injectable()
export class CanLoadTeamSection implements CanLoad {
  constructor(
    private permissions: Permissions,
    private currentUser: UserToken
  ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.permissions.canLoadChildren(
      this.currentUser,
      route as string,
      segments
    );
  }
}
