import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-std',
  // template: `<h2 *ngIf="displayname; else elseBlock">
  //                 Hello World
  //             </h2>
              
              
  //             <ng-template #elseBlock>
  //               <h2>
  //                 Name is hidden
  //               </h2>
  //             </ng-template>`,


  template:`

    <div *ngIf="displayname; then thenBlock; else elseBlock">
    </div>

    <ng-template #thenBlock>
      <h2>Hello World</h2>
    </ng-template>

    <ng-template #elseBlock>
      <h2>Hidden</h2> 
    </ng-template>

  `,
  styleUrls: ['./std.component.css']
})
export class StdComponent implements OnInit {

  displayname = true;
  constructor() { }

  ngOnInit(): void {
  }

}
