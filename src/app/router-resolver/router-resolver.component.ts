import { Component, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-router-resolver',
  templateUrl: './router-resolver.component.html',
  styleUrls: ['./router-resolver.component.css'],
})
export class ResolverComponent implements OnInit {
  loading = false;

  constructor(private router: Router) {
    router.events
      .pipe(
        filter((event): event is RouterEvent => event instanceof RouterEvent)
      )
      .subscribe((event: RouterEvent) => {
        switch (true) {
          case event instanceof NavigationStart: {
            this.loading = true;
            break;
          }
          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
            this.loading = false;
            break;
          }
          default: {
            break;
          }
        }
      });
  }

  ngOnInit(): void {}

  navigateHome(): void {
    this.router.navigateByUrl('/resolver');
  }
}
