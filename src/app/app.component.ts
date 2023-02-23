import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router, private stateService: StateService) {}

  navigateHome(): void {
    this.router.navigateByUrl('/home');
  }
}
