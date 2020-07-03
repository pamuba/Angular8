import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template:`
    <input [id] = "myId" type="text" value="Bangalore">
    <input id = {{myId}} type="text" value="Bangalore">
    <input [disabled]="isDisabled" id = {{myId}} type="text" value="Bangalore">
    <input bind-disabled="isDisabled" id = {{myId}} type="text" value="Bangalore">
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public siteUrl = window.location.href;
  public name = "John"
  public myId = "testId"
  public isDisabled = true;
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello "+this.name;
  }

}
