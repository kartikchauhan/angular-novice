import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from './shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent {

    ingredients: Ingredient[];

    constructor(private shoppinglistService: ShoppinglistService)
    {
        this.ingredients = this.shoppinglistService.getIngredients();
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
