import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ActivatedRouteSnapshot,
  PreloadAllModules,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';

import { AppComponent } from './app.component';
import { CanActivateTeam, UserToken, Permissions } from './can-activate';
// import { CanLoadTeamSection, UserToken, Permissions } from './can-load';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';
import { DIServicesModule } from './di-services/di-services.module';
import { PipesDirectivesModule } from './pipes-directives/pipes-directives.module';
import { ProvidersViewProvidersComponent } from './providers-view-providers/providers-view-providers.component';
import { ProvidersViewProvidersModule } from './providers-view-providers/providers-view-providers.module';
import { ResolutionModifiersModule } from './resolution-modifiers/resolution-modifiers.module';
import { RouterResolverModule } from './router-resolver/router-resolver.module';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'resolver',
    loadChildren: () =>
      import('./router-resolver/router-resolver.module').then(
        (m) => m.RouterResolverModule
      ),
    canActivate: [CanActivateTeam],
    // canLoad: [CanLoadTeamSection],
  },
  {
    path: 'resolution-modifier',
    loadChildren: () =>
      import('./resolution-modifiers/resolution-modifiers.module').then(
        (m) => m.ResolutionModifiersModule
      ),
  },
  {
    path: 'providers-view-providers',
    loadChildren: () =>
      import('./providers-view-providers/providers-view-providers.module').then(
        (m) => m.ProvidersViewProvidersModule
      ),
    // children: [{ path: '', component: ProvidersViewProvidersComponent }],
  },
  {
    path: 'pipes-directives',
    loadChildren: () =>
      import('./pipes-directives/pipes-directives.module').then(
        (m) => m.PipesDirectivesModule
      ),
    // data: { preload: true, delay: true },
  },
  {
    path: 'di-services',
    loadChildren: () =>
      import('./di-services/di-services.module').then(
        (m) => m.DIServicesModule
      ),
    // data: { preload: true, delay: true },
  },
  {
    path: 'favicon',
    loadChildren: () =>
      import('./favicon/favicon.module').then((m) => m.FaviconModule),
    // data: { preload: true, delay: true },
  },
  {
    path: 'control-value-accessor',
    loadChildren: () =>
      import('./control-value-accessor/control-value-accessor.module').then(
        (m) => m.ControlValueAccessorModule
      ),
    // data: { preload: true, delay: true },
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    // RouterModule.forRoot(ROUTES),

    // RouterResolverModule,
    // PipesDirectivesModule,
    // DIServicesModule,
    // ProvidersViewProvidersModule,
    // ResolutionModifiersModule,
    RouterModule.forRoot(ROUTES, {
      // preloadingStrategy: PreloadAllModules,
      // preloadingStrategy: CustomPreloadingStrategy,
    }),
  ],
  providers: [
    CustomPreloadingStrategy,
    // CanLoadTeamSection,
    CanActivateTeam,
    UserToken,
    Permissions,
  ],
  // providers: [SharedService],

  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
