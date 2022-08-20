import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private router:Router ) { 

    let eventos = this.router.events.pipe(
      filter((e):e is NavigationEnd => e instanceof NavigationEnd),
      filter(e=>e.url == '')
    )
    
    eventos.subscribe(e =>{
      console.log(e)
    })
   }

  ngOnInit(): void {
  }

}
