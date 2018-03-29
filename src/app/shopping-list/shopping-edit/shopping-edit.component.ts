import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

    @ViewChild('ingredientName') ingredientName: ElementRef;
    @ViewChild('ingredientAmount') ingredientAmount: ElementRef;

    // @Output() addNewIngredientEvent = new EventEmitter<Ingredient>();

    constructor(private shoppinglistService: ShoppinglistService){}

    addNewIngredient()
    {
        const newIngredient = new Ingredient(this.ingredientName.nativeElement.value, this.ingredientAmount.nativeElement.value);
        this.shoppinglistService.addNewIngredient(newIngredient);

        // this.addNewIngredientEvent.emit(newIngredient);
    }
}
