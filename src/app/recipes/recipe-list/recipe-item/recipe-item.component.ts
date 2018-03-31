import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent {
    @Input() recipe: Recipe;
    @Input() index: number;
    // @Output() showRecipeEvent = new EventEmitter();

    constructor(private recipeService: RecipeService){}

    showRecipe()
    {
        this.recipeService.recipeSelected.emit(this.recipe);
    }

}
