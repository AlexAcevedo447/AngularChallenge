import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { loginError } from '../alerts/error.alert';
import { login } from '../interfaces/people.interface';
import { loginCredential } from '../interfaces/securityObjects.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiValidatorService {

  token!:string|null;

  constructor(private _httpMailer_:HttpClient, private _navigator_:Router) {
    
   }

  validateUser(body:login){
    return this._httpMailer_.post<loginCredential>("http://challenge-react.alkemy.org",body).subscribe((response:loginCredential)=>{
      this.token = response.token;
      localStorage.setItem('token',JSON.stringify(response.token))
      this._navigator_.navigate(['home'])
    },
    ()=>{
      loginError()
    })
  }

  logUserOut(){
    localStorage.removeItem("token");
    this.token = null;
    location.reload();
  }
}
