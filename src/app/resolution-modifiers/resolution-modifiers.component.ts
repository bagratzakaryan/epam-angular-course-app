import { Component } from '@angular/core';
import { LeafService } from './leaf.service';
import { FlowerService } from './flower.service';

@Component({
  selector: 'app-resolution-modifiers',
  templateUrl: './resolution-modifiers.component.html',
  styleUrls: ['./resolution-modifiers.component.css'],
})
export class ResolutionModifiersComponent {
  constructor(public flower: FlowerService, public leaf: LeafService) {}
}
