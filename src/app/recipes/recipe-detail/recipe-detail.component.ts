import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    
    // @Input() recipe: Recipe;
    
    recipe: Recipe;
    id: number;

    constructor(private recipeService: RecipeService, private currentRouter: ActivatedRoute, private router: Router) { }

    ngOnInit()
    {
        this.currentRouter.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.recipe = this.recipeService.getRecipeById(this.id);
            }
        );
    }

    onRecipeEdit()
    {
        this.router.navigate(['edit'], {relativeTo: this.currentRouter});
    }


    addIngredientsToShoppingList()
    {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
}
