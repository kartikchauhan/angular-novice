import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent {

    ingredients: Ingredient[] = [
        new Ingredient('Apple', 4),
        new Ingredient('Banana', 12)
    ];

    addIngredientToList(newIngredient:Ingredient)
    {
        this.ingredients.push(newIngredient);
    }

}
