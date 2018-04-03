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

    @ViewChild('formRef') formRef: NgForm;
    editMode: boolean = false;
    ingredientToUpdateIndex: number;    

    // @ViewChild('ingredientName') ingredientName: ElementRef;
    // @ViewChild('ingredientAmount') ingredientAmount: ElementRef;

    // @Output() addNewIngredientEvent = new EventEmitter<Ingredient>();

    constructor(private shoppinglistService: ShoppinglistService){}

    ngOnInit()
    {
        this.shoppinglistService.updatingIngredient.subscribe(
            (index: number) => {
                this.editMode = true;
                this.ingredientToUpdateIndex = index;
                const ingredientToUpdate = this.shoppinglistService.getIngredientFromIndex(index);
                this.formRef.setValue({
                    ingredientName: ingredientToUpdate.name,
                    ingredientAmount: ingredientToUpdate.amount
                });                
            }
        );
    }

    addNewIngredient(formRef: NgForm)
    {
        const formValue = formRef.value;
        console.log(formValue);
        const newIngredient = new Ingredient(formValue.ingredientName, formValue.ingredientAmount);
        if(this.editMode === true)
        {
            this.shoppinglistService.updateIngredient(this.ingredientToUpdateIndex, newIngredient);
        }
        else
        {
            this.shoppinglistService.addNewIngredient(newIngredient);
        }
    }
}
