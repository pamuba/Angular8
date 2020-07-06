import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee'
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string="/assets/data/employees.json";

  constructor(private http:HttpClient) { }


  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
                    .pipe(catchError(error => {
                      return Observable.throw('Something went wrong');
                    }))
  }
}
