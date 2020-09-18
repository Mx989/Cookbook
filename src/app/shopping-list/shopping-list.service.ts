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
    const newIngredients: Ingredient[] = [];
    ingredients.forEach(ingredient =>{
      if(this.shoppingList.filter(ing => ing.name == ingredient.name).length>0){
        this.shoppingList.filter(ing => ing.name == ingredient.name)[0].amount += ingredient.amount;
      }
      else {
        newIngredients.push(ingredient);
      }
    });
    this.shoppingList.push(...newIngredients);
  }

  getShoppingList(): Observable<Ingredient[]> {
    return of(this.shoppingList.slice());
  }

  clearList(): void {
    console.log("clearing...");
    this.shoppingList = [];
  }
}
