import { Component, Input, OnInit } from '@angular/core';
import { Meal} from 'src/app/resources/interfaces/generic.interface';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input()recetas!:Array<Meal>;
  contenedor!:HTMLElement;

  constructor() {
    this.recetas = [];
  }

  ngOnInit(): void {
  }
}
