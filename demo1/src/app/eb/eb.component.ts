import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb',
  template: `<button (click)="onClick($event)">Greet</button>
             <button (click)="greetings='Welcome to the Class'">Greet</button>
            {{greetings}}`,
  styleUrls: ['./eb.component.css']
})
export class EbComponent implements OnInit {

  public name = "Will Smith"
  public greetings = ""
  constructor() { }

  ngOnInit(): void {
  }
  onClick(event)
  {
    console.log(event)
    this.greetings = event.type
  }

}
