import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
              <h2>Angular8</h2>
              <button (click)="onClick()">Greet</button>
  `,
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    console.log("Clicked")
  }

}
