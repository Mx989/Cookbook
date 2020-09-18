import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/models/ingredient.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RecipesService {

    constructor(
        private http: HttpClient
    ) {}

    jsonServerUrl = "http://localhost:3000/";

    recipes: Recipe[] = [
        new Recipe(1, 'Test Recipe 1', 'This is a test', 'https://intwoodfarm-static.myshopblocks.com/images/2020/04/resize/256x256/922237993f1edb7776344a961420980f.jpg', [new Ingredient("Banana", 10), new Ingredient("Apple", 5)]),
        new Recipe(2, 'Test Recipe 2', 'This is a test', 'https://intwoodfarm-static.myshopblocks.com/images/2020/04/resize/256x256/922237993f1edb7776344a961420980f.jpg', [new Ingredient("Pear", 12), new Ingredient("Apple", 1)]),
        new Recipe(3, 'Test Recipe 3', 'This is a test', 'https://intwoodfarm-static.myshopblocks.com/images/2020/04/resize/256x256/922237993f1edb7776344a961420980f.jpg', [new Ingredient("Banana", 10), new Ingredient("Plum", 7)])
      ];

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes.slice().filter(recipe => recipe.id == id)[0];
    }

    // fetchRecipes(): Observable<Recipe[]> {
    //     return this.http.get(this.jsonServerUrl + "recipes");
    // }

    uploadRecipes(){
        this.http.put(this.jsonServerUrl, this.recipes);
    }


}