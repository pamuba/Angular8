import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `Data From Parent:{{parentData}}`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public parentData

  constructor() { }

  ngOnInit(): void {
  }

}
