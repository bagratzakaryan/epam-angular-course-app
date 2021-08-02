import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-usage',
  templateUrl: './directive-usage.component.html',
  styleUrls: ['./directive-usage.component.css'],
})
export class DirectiveUsageComponent implements OnInit {
  condition = false;
  color!: string;

  constructor() {}

  ngOnInit(): void {}
}
