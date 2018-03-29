import { Ingredient } from '../shared/ingredient.model';

export class ShoppinglistService
{
    ingredients: Ingredient[] = [
        new Ingredient('Apple', 4),
        new Ingredient('Banana', 12)
    ];

    getIngredients()
    {
        return this.ingredients.slice();
    }

    addNewIngredient(ingredient: Ingredient)
    {
        this.ingredients.push(ingredient);
    }    

    addIngredientsFromRecipeServiceToShoppingService(ingredients: Ingredient[])
    {
        this.ingredients.push(...ingredients);
    }
}