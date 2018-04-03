import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppinglistService
{
    ingredientsChanged = new Subject<Ingredient[]>();
    updatingIngredient = new Subject<number>();

    ingredients: Ingredient[] = [
        new Ingredient('Apple', 4),
        new Ingredient('Banana', 12)
    ];

    getIngredients()
    {
        return this.ingredients.slice();
    }

    getIngredientFromIndex(index: number)
    {
        return this.ingredients.slice()[index];
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
    
    onEditIngredient(index: number)
    {
        this.updatingIngredient.next(index);
    }

    updateIngredient(index: number, updatedIngredient: Ingredient)
    {
        this.ingredients[index] = updatedIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}