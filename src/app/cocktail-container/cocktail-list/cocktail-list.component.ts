import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICocktail } from 'src/app/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent {
  @Input() public cocktails!: ICocktail[];
  @Output() private changeCocktail: EventEmitter<number> = new EventEmitter();
  public cocktailSelected!: ICocktail;

  public showCocktail(index: number): void {
    this.changeCocktail.emit(index);
  }
}
