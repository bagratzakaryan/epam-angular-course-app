import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ResolverComponent } from './router-resolver.component';
import { WithResolverComponent } from './with-resolver/with-resolver.component';
import { WithoutResolverComponent } from './without-resolver/without-resolver.component';
import { UserResolver } from './user.resolver';
import { GithubUserService } from './github-user.service';

const ROUTES: Routes = [
  {
    path: '',
    component: ResolverComponent,
    children: [
      {
        path: 'hasresolver',
        component: WithResolverComponent,
        outlet: 'with',
        resolve: { users: UserResolver },
      },
      {
        path: 'noresolver',
        component: WithoutResolverComponent,
        outlet: 'without',
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [
    ResolverComponent,
    WithResolverComponent,
    WithoutResolverComponent,
  ],
  providers: [GithubUserService, UserResolver],
})
export class RouterResolverModule {}
