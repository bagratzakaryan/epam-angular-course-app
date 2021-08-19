import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';

export class CustomPreloadingStrategy implements PreloadingStrategy {
  // loadModule could be any function name here
  // preload(route: Route, loadModule: Function): Observable<any> {
  //   return route.data && route.data.applyPreload ? loadModule() : of(null);
  // }

  preload(route: Route, load: Function): Observable<any> {
    const loadRoute = (delay: number) =>
      delay ? timer(10000).pipe(flatMap((_) => load())) : load();
    return route.data && route.data.preload
      ? loadRoute(route.data.delay)
      : of(null);
  }
}
