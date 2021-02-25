import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/models/ingredient.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take, exhaustMap } from 'rxjs/operators';
import { LoginService } from '../login/login.service';

@Injectable()
export class RecipesService {

    constructor(
        private http: HttpClient,
        private loginService: LoginService
    ) {}

    apiUrl = "https://localhost:44324/";

    // recipes: Recipe[] = [
    //     new Recipe(1, 'Test Recipe 1', 'This is a test', 'https://intwoodfarm-static.myshopblocks.com/images/2020/04/resize/256x256/922237993f1edb7776344a961420980f.jpg', [new Ingredient("Banana", 10), new Ingredient("Apple", 5)]),
    //     new Recipe(2, 'Test Recipe 2', 'This is a test', 'https://intwoodfarm-static.myshopblocks.com/images/2020/04/resize/256x256/922237993f1edb7776344a961420980f.jpg', [new Ingredient("Pear", 12), new Ingredient("Apple", 1)]),
    //     new Recipe(3, 'Test Recipe 3', 'This is a test', 'https://intwoodfarm-static.myshopblocks.com/images/2020/04/resize/256x256/922237993f1edb7776344a961420980f.jpg', [new Ingredient("Banana", 10), new Ingredient("Plum", 7)])
    //   ];
    recipes: Recipe[] = [];

    getRecipes() {
        return this.loginService.currentUser.pipe(
            take(1),
            exhaustMap(user => {
            return this.http.get<Recipe[]>(
                this.apiUrl + 'Recipes/GetRecipes', 
                {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + user.jwtKey)
                }
            );
        }));
    }

    getIngredientsForRecipe(recipeId: number) {
        return this.loginService.currentUser.pipe(
            take(1),
            exhaustMap(user => {
            return this.http.get<Ingredient[]>(
                this.apiUrl + 'Recipes/GetIngredients?recipeId=' + recipeId, 
                {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + user.jwtKey)
                }
            );
        }));
    }

    addRecipe(name: string, description: string, imgPath: string) {
        const body = {
            name: name,
            description: description,
            imagePath: imgPath
        }

        return this.loginService.currentUser.pipe(
            take(1),
            exhaustMap(user => {
            return this.http.post(
                this.apiUrl + 'Recipes/AddRecipe',
                body, 
                {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + user.jwtKey)
                }
            );
        }));
    }

    addIngredient(name: string, amount: number, unit: string, recipeId: number) {
        const body = {
            RecipeId: recipeId,
            Name: name,
            Amount: amount,
            Unit: unit
        }

        return this.loginService.currentUser.pipe(
            take(1),
            exhaustMap(user => {
            return this.http.post(
                this.apiUrl + 'Recipes/AddIngredient?recipeId=' + recipeId,
                body, 
                {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + user.jwtKey)
                }
            );
        }));
    }

    removeRecipe(recipeId: number) {
        return this.loginService.currentUser.pipe(
            take(1),
            exhaustMap(user => {
            return this.http.get(
                this.apiUrl + 'Recipes/RemoveRecipe?id=' + recipeId, 
                {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + user.jwtKey)
                }
            );
        }));
    }

    removeIngredient(recipeId: number, ingredientId: number) {
        return this.loginService.currentUser.pipe(
            take(1),
            exhaustMap(user => {
            return this.http.get(
                this.apiUrl + 'Recipes/RemoveIngredient?recipeId=' + recipeId + '&ingredientId=' + ingredientId, 
                {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + user.jwtKey)
                }
            );
        }));
    }

    // getRecipe(id: number) {
    //     return this.recipes.slice().filter(recipe => recipe.id == id)[0];
    // }

    // fetchRecipes(): Observable<Recipe[]> {
    //     return this.http.get(this.jsonServerUrl + "recipes");
    // }

    // uploadRecipes(){
    //     this.http.put(this.apiUrl, this.recipes);
    // }


}