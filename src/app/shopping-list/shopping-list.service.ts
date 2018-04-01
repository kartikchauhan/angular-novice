import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppinglistService
{
    ingredientsChanged = new Subject<Ingredient[]>();
    
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
        this.ingredientsChanged.next(this.ingredients.slice());
    }    

    addIngredientsFromRecipeServiceToShoppingService(ingredients: Ingredient[])
    {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}