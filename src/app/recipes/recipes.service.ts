import { Recipe } from './recipe.model';

export class RecipesService {
    recipes: Recipe[] = [
        new Recipe(1, 'Test Recipe 1', 'This is a test', 'https://dish.co.nz/media/VERSIONS/2020/01/24/dish-recipes-88-roasted-pumpkin-salad_article--740x1005.png'),
        new Recipe(2, 'Test Recipe 2', 'This is a test', 'https://dish.co.nz/media/VERSIONS/2020/01/24/dish-recipes-88-roasted-pumpkin-salad_article--740x1005.png'),
        new Recipe(3, 'Test Recipe 3', 'This is a test', 'https://dish.co.nz/media/VERSIONS/2020/01/24/dish-recipes-88-roasted-pumpkin-salad_article--740x1005.png')
      ];

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes.slice().filter(recipe => recipe.id == id)[0];
    }
}