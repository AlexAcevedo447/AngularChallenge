import { Component, OnInit } from '@angular/core';
import { Meal, RequestAll } from 'src/app/resources/interfaces/generic.interface';
import { RecipesService } from 'src/app/resources/services/recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public recipes!:Array<Meal>;

  constructor(private mealService:RecipesService) { 
    
    this.mealService.getMeal().subscribe((response:RequestAll)=>{
      this.recipes = response.searchResults[0].results;
      console.log(this.recipes)
    });
  }

  
  ngOnInit(): void {
  }

}
