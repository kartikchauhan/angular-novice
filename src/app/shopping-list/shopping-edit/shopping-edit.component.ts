import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

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

    addNewIngredient(formRef: NgForm)
    {
        const formValue = formRef.value;
        console.log(formValue);
        const newIngredient = new Ingredient(formValue.ingredientName, formValue.ingredientAmount);
        this.shoppinglistService.addNewIngredient(newIngredient);
    }
}
