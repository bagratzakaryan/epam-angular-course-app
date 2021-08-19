import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-with-resolver',
  templateUrl: './with-resolver.component.html',
  styleUrls: ['./with-resolver.component.css'],
})
export class WithResolverComponent implements OnInit {
  users: any[] = [];
  pokemon: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.users = this.route.snapshot.data.users;
    this.pokemon = this.route.snapshot.data.pokemon;
  }
}
