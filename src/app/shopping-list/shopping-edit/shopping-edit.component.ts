import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

    @ViewChild('ingredientName') ingredientName: ElementRef;
    @ViewChild('ingredientAmount') ingredientAmount: ElementRef;

    @Output() addNewIngredientEvent = new EventEmitter<Ingredient>();

    constructor() { }

    ngOnInit() {
    }

    AddNewIngredient()
    {
        const newIngredient = new Ingredient(this.ingredientName.nativeElement.value, this.ingredientAmount.nativeElement.value);
        this.addNewIngredientEvent.emit(newIngredient);
    }
}
