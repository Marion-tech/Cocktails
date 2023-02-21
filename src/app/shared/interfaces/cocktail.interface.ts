import { IIngredient } from './ingredient.interface';

export interface ICocktail {
  name: string;
  img: string;
  description: string;
  ingredient?: IIngredient[];
}
