import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { ApiValidatorService } from 'src/app/resources/services/api-validator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router, private validator:ApiValidatorService) {
    
  }

  ngOnInit(): void {
  }

  logout(event:Event){
    this.validator.logUserOut();
  }

}
