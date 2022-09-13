import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent implements OnInit {
  @Input() title:string;
  @Input() content:string;
  @Input() id:string;


  constructor() { 
    this.content = "";
    this.title = "";
    this.id="";
  }

  ngOnInit(): void {
  }

  dismiss(id:string, event:Event){
    const card = document.getElementById(id);
    card?.classList.remove("active")
  }

}
