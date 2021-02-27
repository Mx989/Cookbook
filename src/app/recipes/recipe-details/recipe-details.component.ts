import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipesService } from '../recipes.service';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { throwIfEmpty } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output('closeDetails') close = new EventEmitter<void>();
  @Output('refreshRecipes') refresh = new EventEmitter<void>();
  editIngredientsMode = false;
  addIngredientMode = false;
  firstDeleteStep = false;
  admMode = false;

  constructor(private shoppingListService: ShoppingListService, private recipesService: RecipesService, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.recipe);
    this.recipesService.getIngredientsForRecipe(this.recipe.id).subscribe(data => {
      this.recipe.ingredients = data;
    });
    this.loginService.currentUser.subscribe(user =>{
      if(user.role === "Administrator") this.admMode = true;
    });
  }

  onClose() {
    this.recipe = undefined;
    this.close.emit();
  }

  toShoppingList() {
    this.shoppingListService.addToShoppingList(this.recipe.ingredients);
    this.onClose();
  }

  onEditIngredients() {
    this.editIngredientsMode = !this.editIngredientsMode;
  }

  removeRecipe() {
    if(!this.firstDeleteStep) {
      this.firstDeleteStep = true;
    }
    else if(this.firstDeleteStep) {
      this.recipesService.removeRecipe(this.recipe.id).subscribe(res=>{
        this.firstDeleteStep = false;
        this.onClose();
        this.router.navigate(['./recipes']);
        this.refresh.emit();
      });
    }
  }

  removeIngredient(ingredient: Ingredient){
    this.recipesService.removeIngredient(this.recipe.id, ingredient.id).subscribe(res=> {
      this.recipesService.getIngredientsForRecipe(this.recipe.id).subscribe(data => {
        this.recipe.ingredients = data;
      });
    });
  }

  onIngredientSubmit(form: NgForm) {
    this.recipesService.addIngredient(form.value.name, form.value.amount, form.value.unit, this.recipe.id).subscribe(res=>{
      this.recipesService.getIngredientsForRecipe(this.recipe.id).subscribe(data => {
        this.recipe.ingredients = data;
      });
      this.toggleAddIngredientMode(form);
    });
  }

  toggleAddIngredientMode(form: NgForm = null) {
    this.addIngredientMode = !this.addIngredientMode;
    if(form !== null) form.reset();
  }

}
