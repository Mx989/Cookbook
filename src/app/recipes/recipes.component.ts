import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe(1, 'Test Recipe 1', 'This is a test', 'https://dish.co.nz/media/VERSIONS/2020/01/24/dish-recipes-88-roasted-pumpkin-salad_article--740x1005.png'),
    new Recipe(2, 'Test Recipe 2', 'This is a test', 'https://dish.co.nz/media/VERSIONS/2020/01/24/dish-recipes-88-roasted-pumpkin-salad_article--740x1005.png'),
    new Recipe(3, 'Test Recipe 3', 'This is a test', 'https://dish.co.nz/media/VERSIONS/2020/01/24/dish-recipes-88-roasted-pumpkin-salad_article--740x1005.png')


  ];

  //TODO recipes = service.getRecipes();

  constructor() { }

  ngOnInit(): void {
  }

}
