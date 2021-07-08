import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'epam-angular-course-app';
  birthday = new Date(1988, 3, 15);
  condition = false;
}
