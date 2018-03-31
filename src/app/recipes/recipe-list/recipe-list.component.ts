import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

    id: number;
    isEdit: boolean = false;
    recipes: Recipe[];

    constructor(private recipeService: RecipeService, private currentRouter: ActivatedRoute, private router: Router)
    {
        this.recipes = this.recipeService.getRecipes();
    }

    ngOnInit()
    {
        this.currentRouter.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.isEdit = params['id'] != null;
            }
        );
    }


    onNewRecipe()
    {
        this.router.navigate(['new'], {relativeTo: this.currentRouter});
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
