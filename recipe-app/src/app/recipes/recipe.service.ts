import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.modal';
import { Ingredient } from '../shared/ingredient.modal';
import { shoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();
  // recipeSelected = new Subject<Recipe>();

  constructor(private slService: shoppingListService) {}

  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'A classic Austrian dish',
      'https://hips.hearstapps.com/hmg-prod/images/chicken-schnitzel-recipe-670edc5d0fe11.jpg?crop=0.582xw:0.871xh;0.226xw,0.108xh&resize=1200:*',
      [new Ingredient('Meat', 1), new Ingredient('Bread', 2)]
    ),
    new Recipe(
      'Spaghetti',
      'A classic Italian dish',
      'https://i2.wp.com/hipfoodiemom.com/wp-content/uploads/2020/04/IMG_9525-2.jpg',
      [
        new Ingredient('Spaghetti', 1),
        new Ingredient('Tomato sauce', 1),
        new Ingredient('Meatballs', 1),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
