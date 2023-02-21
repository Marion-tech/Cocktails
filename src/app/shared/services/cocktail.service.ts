import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICocktail } from '../interfaces/cocktail.interface';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktails$: BehaviorSubject<ICocktail[]> = new BehaviorSubject([
    {
      name: 'Mojito',
      img: 'https://www.hangoverweekends.co.uk/uploads/images/mojito.jpg',
      description:
        'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.',
    },
    {
      name: 'Cosmopolitan',
      img: 'https://www.hangoverweekends.co.uk/uploads/images/cosmo.jpg',
      description:
        'The tangy concoction of vodka, triple sec, lime juice and cranberry juice has managed to leapfrog the venerable screwdriver as many vodka drinkers prefer the Cosmopolitan’s cleaner and slightly tart taste. The keys to the preparation of a Cosmopolitan are a good brand of cranberry juice and Cointreau Triple Sec, two essential elements to the drink.',
    },
    {
      name: 'Pina Colada',
      img: 'https://www.hangoverweekends.co.uk/uploads/images/pina_colada_cocktail.jpg',
      description:
        'The classic tropical cocktail, with a distinctive look and taste. More of a smoothie as opposed to an alcoholic beverage. The modest yet perfect blend of coconut milk, rum and pineapple juice has been a firm favourite throughout the years.  ',
    },
  ]);

  public selectedCocktail$: BehaviorSubject<ICocktail> = new BehaviorSubject(
    this.cocktails$.value[0]
  );

  public selectCocktail(index: number): void {
    this.selectedCocktail$.next(this.cocktails$.value[index]);
  }

  constructor() {
    // console.log(this.cocktails.value);
  }
}
