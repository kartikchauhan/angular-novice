import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

    recipes: Recipe[];

    constructor(private recipeService: RecipeService)
    {
        this.recipes = this.recipeService.getRecipes();
    }

    // recipes: Recipe[] = [
    //     new Recipe('recipe 1', 'test description', 'http://www.sdsmasala.com/wp-content/uploads/2016/12/shahi-paneer.jpg'),
    //     new Recipe('recipe 2', 'test description 2', 'http://www.sdsmasala.com/wp-content/uploads/2016/12/shahi-paneer.jpg')
    // ];

    // @Output() showRecipeEvent = new EventEmitter<Recipe>();

    // showClickRecipe(currentRecipe: Recipe)
    // {
    //     this.showRecipeEvent.emit(currentRecipe);
    // }



}
