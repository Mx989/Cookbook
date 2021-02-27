import { Component, OnInit, Input, HostListener, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit, OnDestroy {
  
  onAddState: boolean = false;
  //detailsOpen: boolean = false;
  selectedRecipeId: Number = -1;
  recipes: Recipe[];
  currentUser: User;
  admMode = false;

  constructor(private recipesService: RecipesService, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });

    this.loginService.currentUser.subscribe(user => {
      this.currentUser = user;
      if(this.currentUser.role === "Administrator") this.admMode = true;
    });
  }

  toggleRecipeDetails(recipe: Recipe = null) {
    if(recipe === null){
      this.selectedRecipeId = -1;
    }
    else {
      this.selectedRecipeId = recipe.id;
    }
  }

  onRefresh() {
    this.router.navigate(['./recipes']);
    this.recipesService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  onAddNewRecipe() {
    this.router.navigate(['./addRecipe']);
  }

  ngOnDestroy(): void {
  }
}
