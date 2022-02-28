import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaviconComponent } from './favicon.component';

import { BROWSER_FAVICONS_CONFIG } from './favicons';
import { BrowserFavicons } from './favicons';
import { Favicons } from './favicons';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    component: FaviconComponent,
  },
];

@NgModule({
  declarations: [FaviconComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  providers: [
    // The Favicons is an abstract class that represents the dependency-injection
    // token and the API contract. THe BrowserFavicon is the browser-oriented
    // implementation of the service.
    {
      provide: Favicons,
      useClass: BrowserFavicons,
    },
    // The BROWSER_FAVICONS_CONFIG sets up the favicon definitions for the browser-
    // based implementation. This way, the rest of the application only needs to know
    // the identifiers (ie, "happy", "default") - it doesn't need to know the paths
    // or the types. This allows the favicons to be modified independently without
    // coupling too tightly to the rest of the code.
    {
      provide: BROWSER_FAVICONS_CONFIG,
      useValue: {
        icons: {
          square: {
            type: 'image/png',
            href: 'https://www.google.com/favicon.ico',
            isDefault: true,
          },
          happy: {
            type: 'image/jpeg',
            href: './icons/happy.jpg',
          },
          indifferent: {
            type: 'image/png',
            href: './icons/indifferent.png',
          },
          sad: {
            type: 'image/jpeg',
            href: './icons/sad.jpg',
          },
        },

        // I determine whether or not a random token is auto-appended to the HREF
        // values whenever an icon is injected into the document.
        cacheBusting: true,
      },
    },
  ],
})
export class FaviconModule {}
