import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../model/recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output()recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe('Salmon Recipe', 'Salmon food', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),
    new Recipe('Chicken tandoori Recipe', 'Tasty chicken tandoori', 'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg'),
    new Recipe('VEG MOMOS RECIPE', 'Veg momos recipe', 'http://media3.sailusfood.com/wp-content/uploads/2016/03/veg-momos-recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeEl: Recipe) {
    this.recipeWasSelected.emit(recipeEl);
  }

  onSave(name:string, description:string, url:string) {
    this.recipes.push(new Recipe(name, description, url));
  }

}
