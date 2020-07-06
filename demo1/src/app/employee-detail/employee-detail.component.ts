import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.id }}  {{ employee.name }}  {{ employee.age }}</li>
    </ul>
  `,
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  constructor(private _employeeservice:EmployeeService) {}

  ngOnInit(): void {
    this._employeeservice.getEmployees()
        .subscribe(data => this.employees = data)
  }
}

