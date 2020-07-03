import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-demo',
  template:

      // <div [ngSwitch]="color">
      //   <div *ngSwitchCase="'red'">You picked red color </div>
      //   <div *ngSwitchCase="'blue'">You picked blue color </div>
      //   <div *ngSwitchCase="'yellow'">You picked yellow color </div>
      //   <div *ngSwitchDefault>Try Again</div>
      // </div>
  `
      <div *ngFor="let color of colors; index as i;first as f;last as l;even as e; odd as o">
        <h2> {{i}} {{color}}  {{f}}  {{l}}  {{e}}   {{o}}</h2>
      </div>

  `,
  styleUrls: ['./switch-demo.component.css']
})
export class SwitchDemoComponent implements OnInit {

  // public color = "purple";

  public colors = ["red", "blue", "green", "yellow"]
  constructor() { }

  ngOnInit(): void {
  }

}
