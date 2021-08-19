import { Component, OnInit } from '@angular/core';
import { GithubUserService } from '../github-user.service';

@Component({
  selector: 'app-without-resolver',
  templateUrl: './without-resolver.component.html',
  styleUrls: ['./without-resolver.component.css'],
})
export class WithoutResolverComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: GithubUserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
