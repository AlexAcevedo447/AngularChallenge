import { Component, Input, OnInit } from '@angular/core';
import { MealClass } from 'src/app/resources/classes/meal.class';
import { Meal } from 'src/app/resources/interfaces/generic.interface';
import { RecipesService } from 'src/app/resources/services/recipes.service';

@Component({
  selector: 'app-meal-section',
  templateUrl: './meal-section.component.html',
  styleUrls: ['./meal-section.component.css']
})
export class MealSectionComponent implements OnInit {
  @Input() meals:Array<Meal[]>;
  results:Array<string>;
  adapter!:MealClass;

  constructor(private mealService:RecipesService) {
    this.adapter = new MealClass(this.mealService);
    this.results = [];
    this.meals = [];
    // this.getMealByName({query:"Lemon"});

    this.adapter.getMeal();
    this.meals = this.adapter.getMeals;
    this.results = this.adapter.getResults;
    
  }

  ngOnInit(): void {
  }
  
}
