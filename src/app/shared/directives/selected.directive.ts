import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { ICocktail } from '../interfaces/cocktail.interface';

@Directive({
  selector: '[appSelected]',
})
export class SelectedDirective implements OnChanges {
  @Input() public appSelected?: boolean;
  @HostBinding('style.backgroundColor') private bgcolor?: string;
  @HostBinding('style.fontWeight') private fontWeight?: string;
  @HostBinding('style.color') private color?: string;

  ngOnChanges(): void {
    if (this.appSelected) {
      this.bgcolor = 'var(--primary)';
      this.color = 'white';
      this.fontWeight = '500';
    } else {
      this.bgcolor = 'white';
      this.fontWeight = '400';
      this.color = 'var(--text-regular)';
    }
  }

  constructor() {
    this.appSelected = false;
    this.bgcolor = 'white';
    this.fontWeight = '400';
    this.color = 'var(--textregular)';
  }
}
