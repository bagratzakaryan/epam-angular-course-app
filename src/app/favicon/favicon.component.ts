import { Component, OnInit } from '@angular/core';
import { Favicons } from './favicons';

@Component({
  selector: 'app-favicon',
  templateUrl: './favicon.component.html',
  styleUrls: ['./favicon.component.css'],
})
export class FaviconComponent implements OnInit {
  private favicons: Favicons;

  // I initialize the app component.
  constructor(favicons: Favicons) {
    this.favicons = favicons;
  }

  // ---
  // PUBLIC METHODS.
  // ---

  // I get called once after the inputs have been bound.
  public ngOnInit(): void {
    this.resetFavicon();
  }

  // I reset the favicon to use the "default" item.
  public resetFavicon(): void {
    console.log('Resetting favicon');
    this.favicons.reset();
  }

  // I activate the favicon with the given name.
  public useFavicon(name: string): void {
    console.log('Activating favicon:', name);
    // Notice that we don't need to know anything about how the favicon is defined;
    // not URLs, no image types - just the identifier. All of the implementation
    // details have been defined at bootstrap time.
    this.favicons.activate(name);
  }
}
