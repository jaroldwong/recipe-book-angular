import { Recipe } from './recipe.model';

// don't need @Injectable if you're not injecting a service into this service
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    )
  ];

  getRecipes() {
    // DON'T do this. Returns reference to the actual array
    // return this.recipes;

    return this.recipes.slice(); // return a copy instead
  }
}
