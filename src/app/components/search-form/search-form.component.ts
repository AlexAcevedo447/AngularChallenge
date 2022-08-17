import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipesService } from 'src/app/resources/services/recipes.service';
import { MealClass } from 'src/app/resources/classes/meal.class';
import { getRecipes, Meal } from 'src/app/resources/interfaces/generic.interface';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  public searchForm:FormGroup;

  public results:Array<string>;
  
  public search!:MealClass;

  public meals:Array<Meal[]>;

  @Output() searchEmmiter = new EventEmitter<getRecipes>()

  constructor(private _builder_:FormBuilder, private _mealService_:RecipesService) {

    this.meals = [];

    this.results = [];
    
    this.search = new MealClass(this._mealService_);

    this.searchForm = this._builder_.group({
      query:['',Validators.compose([Validators.minLength(3)])]
    });
   
  }

  ngOnInit(): void {
    

    this.searchForm.valueChanges.pipe(
      debounceTime(300)
    ).subscribe((values)=>{this.searchEmmiter.emit(values)})
  }
}
