import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  //TODO prepare recipe detail fetching from service
  @Input() recipe: Recipe;
  @Output('closeDetails') close = new EventEmitter<void>();
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    console.log(this.recipe);
    // let id:number = this.route.snapshot.params["id"];
    // this.recipe = this.recipesService.getRecipe(id);
  }

  onClose() {
    this.recipe = undefined;
    this.close.emit();
  }

  toShoppingList() {
    this.shoppingListService.addToShoppingList(this.recipe.ingredients);
    this.onClose();
  }

}
