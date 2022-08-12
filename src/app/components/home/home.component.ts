import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MealClass } from 'src/app/resources/classes/meal.class';
import { getRecipes, Meal, RequestAll, searchResultsAll } from 'src/app/resources/interfaces/generic.interface';
import { RecipesService } from 'src/app/resources/services/recipes.service';
import { MealSectionComponent } from '../meal-section/meal-section.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public recipes:Array<searchResultsAll>;
  public meals:Array<Meal[]>;
  public searchForm:FormGroup;
  public search!:MealClass;

  constructor( private _builder_:FormBuilder, private _mealService_:RecipesService) {
    this.recipes = [];
    this.meals = [];
    
    this.search = new MealClass(this._mealService_);

    this.searchForm = this._builder_.group({
      query:['',Validators.compose([Validators.minLength(3)])]
    });
  }

  ngOnInit(): void {
  }

  getFoodByName(name:getRecipes){
    this.search.getMealByName(name);
    this.meals = this.search.getMeals;
  }

}
