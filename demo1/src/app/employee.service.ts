import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }


  getEmployees(){
    return [
            {id:1, "name":"Will", "age":23},
            {id:1, "name":"Sam", "age":23},
            {id:1, "name":"Tim", "age":23},
            {id:1, "name":"Lee", "age":23}
          ]
  }
}
