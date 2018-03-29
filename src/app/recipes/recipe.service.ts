import { EventEmitter, Output, Injectable } from '@angular/core';

import { Recipe} from './recipe.model';
import { Ingredient }  from '../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService
{
    @Output() recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('pao bhaji', 'asli masale sach sach, MDH, MDH', 'http://www.sdsmasala.com/wp-content/uploads/2016/12/shahi-paneer.jpg',
         [
             new Ingredient('pao', 4),
             new Ingredient('bhaji', 5),
         ]),
        new Recipe('chhole bhature', 'MDH ka tadka ang ang fadka', 'http://www.sdsmasala.com/wp-content/uploads/2016/12/shahi-paneer.jpg',
         [
             new Ingredient('chhole', 12),
             new Ingredient('bhature', 50)
         ])
    ];

    constructor(private shoppingListService: ShoppinglistService) {}


    getRecipes()
    {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[])
    {
        this.shoppingListService.addIngredientsFromRecipeServiceToShoppingService(ingredients);
    }
}