import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from './shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy{

    ingredients: Ingredient[];
    private ingredientsSubscription: Subscription;

    constructor(private shoppinglistService: ShoppinglistService) {}

    ngOnInit()
    {
        this.ingredients = this.shoppinglistService.getIngredients();
        this.ingredientsSubscription = this.shoppinglistService.ingredientsChanged.subscribe(
            (ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            }
        );
    }

    ngOnDestroy()
    {
        this.ingredientsSubscription.unsubscribe();
    }

    // ingredients: Ingredient[] = [
    //     new Ingredient('Apple', 4),
    //     new Ingredient('Banana', 12)
    // ];
    // addIngredientToList(newIngredient:Ingredient)
    // {
    //     this.ingredients.push(newIngredient);
    // }

}
