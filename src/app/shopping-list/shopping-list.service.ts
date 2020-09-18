import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/models/ingredient.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }

  private shoppingList: Ingredient[] = [];

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingList.push(...ingredients);
  }

  getShoppingList(): Observable<Ingredient[]> {
    return of(this.shoppingList.slice());
  }
}
