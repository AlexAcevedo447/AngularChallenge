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
  id:string = "";

  constructor() {
    this.recetas = [];
    
  }

  ngOnInit(): void {
  }

  toggle(id:string,event:Event){
    var prevCard = document.getElementById(this.id);
    var card = document.getElementById(id);
    prevCard?.classList.remove("active")
    if(id){
      card?.classList.toggle("active")
      this.id = id;
    }
    
    
  }
}
