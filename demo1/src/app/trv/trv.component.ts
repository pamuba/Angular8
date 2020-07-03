import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trv',
  template: `<input #myInput type="text">
             <button (click)="logMessage(myInput.value)">Log</button>`,
  styleUrls: ['./trv.component.css']
})
export class TrvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logMessage(value){
    console.log(value)
  }

}
