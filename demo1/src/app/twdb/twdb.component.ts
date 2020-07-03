import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twdb',
  template: `<input [(ngModel)]="name" type="text">
  {{name}}`,
  styleUrls: ['./twdb.component.css']
})
export class TwdbComponent implements OnInit {

  public name="";

  constructor() { }

  ngOnInit(): void {
  }

}
