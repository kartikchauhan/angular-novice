import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

    recipes: Recipe[] = [
        new Recipe('recipe 1', 'test description', 'http://www.sdsmasala.com/wp-content/uploads/2016/12/shahi-paneer.jpg'),
        new Recipe('recipe 2', 'test description', 'http://www.sdsmasala.com/wp-content/uploads/2016/12/shahi-paneer.jpg')
    ];


}
