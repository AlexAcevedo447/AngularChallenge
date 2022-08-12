import { getRecipes, Meal, RequestAll } from '../interfaces/generic.interface';
import { RecipesService } from '../services/recipes.service';

export class MealClass {
  private meals!: Array<Meal[]>;
  private results!: Array<string>;

  constructor(private _mealService_: RecipesService) {
    this.results = [];
    this.meals = [];
  }

  public get getMeals(): Array<Meal[]> {
    return this.meals;
  }

  public get getResults(): Array<string> {
    return this.results;
  }

  public getMeal(): void {
    this._mealService_.getMeal().subscribe((response: RequestAll) => {
      for (var i = 0; i < response.searchResults.length; i++) {
        this.results.push(response.searchResults[i].name);

        this.meals.push(response.searchResults[i].results);
      }

      console.log(this.meals);
      console.log(this.results);
    });
  }

  public getMealByName(name: getRecipes): void {
    this._mealService_
      .getMealByName(name.query)
      .subscribe((response: RequestAll) => {
        for (var i = 0; i < response.searchResults.length; i++) {
          this.results.push(response.searchResults[i].name);

          this.meals.push(response.searchResults[i].results);
        }
      });
  }
}
