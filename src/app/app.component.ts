import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router, private sharedService: SharedService) {}

  navigateHome(): void {
    this.router.navigateByUrl('/home');
  }
}
