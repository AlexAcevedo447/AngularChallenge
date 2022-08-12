import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestAll } from '../interfaces/generic.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor( private _httpMailer_:HttpClient) {
    
  }

  public getMealByName(query:string){
    return this._httpMailer_.get<RequestAll>("https://api.spoonacular.com/food/search?apiKey=f5e47a4d9fdb44a49d1ae8f679891439&query="+query)
  }
  public getMeal(){
    return this._httpMailer_.get<RequestAll>("https://api.spoonacular.com/food/search?apiKey=f5e47a4d9fdb44a49d1ae8f679891439");
  }
}
