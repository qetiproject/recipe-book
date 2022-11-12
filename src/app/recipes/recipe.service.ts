import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ])
      ];
      
    constructor(private slsService: ShoppingListService) {

    }
    getRecipes() {
        return this.recipes.slice()
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slsService.addIngredients(ingredients)
    }
}

