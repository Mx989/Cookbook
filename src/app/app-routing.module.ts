import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';


const routes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  { path: 'addRecipe', component: AddRecipeComponent},
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'recipe/:id', component: RecipeDetailsComponent },
  { path: '**', redirectTo: '/recipes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
