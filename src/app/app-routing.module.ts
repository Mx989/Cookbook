import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';


const routes: Routes = [
  { path: 'recipes', component: RecipesComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'addRecipe', component: AddRecipeComponent, canActivate: [LoginGuard]},
  { path: 'shopping-list', component: ShoppingListComponent, canActivate: [LoginGuard] },
  { path: 'recipe/:id', component: RecipeDetailsComponent, canActivate: [LoginGuard] },
  { path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
