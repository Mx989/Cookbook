import { Component, OnInit, Input, HostListener, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { Router } from '@angular/router';

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

  constructor(private recipesService: RecipesService, private router: Router) { }

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
    this.recipesService.uploadRecipes();
  }

  toggleRecipeDetails(recipe: Recipe = null) {
    if(recipe === null){
      this.selectedRecipeId = -1;
    }
    else {
      this.selectedRecipeId = recipe.id;
      //this.detailsOpen = !this.detailsOpen;
      //console.log(this.detailsOpen);
    }
  }

  ngOnDestroy(): void {
  }
}
