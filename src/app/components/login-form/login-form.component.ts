import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { login } from 'src/app/resources/interfaces/people.interface';
import { ApiValidatorService } from 'src/app/resources/services/api-validator.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  mensaje!: string;
  correct!: string;

  //Formulario reactivo
  loginForm!: FormGroup

  constructor(private _builder_:FormBuilder, private validator:ApiValidatorService) { 

    this.mensaje = "* Campo vacío o lleno incorrectamente";

    this.correct = "Correcto";

    //Formulario reactivo
    this.loginForm = this._builder_.group({
      email: ['',Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  login(values:login):void{
    this.validator.validateUser(values)
  }

  

}
