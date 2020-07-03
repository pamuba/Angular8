import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  // template: `Data From Parent:{{parentData}}`,
  template: `Data From Parent:{{name}}
  <button (click)="fireEvent()">Fire Event</button>`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // @Input() public parentData
  @Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit('Data from the child');
  }

}
