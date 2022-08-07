import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Meal } from 'src/app/resources/interfaces/generic.interface';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input() recetas!:Array<Meal>;
  contenedor!:HTMLElement;

  constructor() { }

  ngOnInit(): void {
  }

  limiteDeCaracteres(evento:Event){
    console.log(evento)
  }
}
