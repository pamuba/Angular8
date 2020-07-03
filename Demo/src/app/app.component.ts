import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <h1>Welcome to the class<h1>
            <h3 [class]="successClass">Angular 8</h3>
            <h3 [class]="successClass">Angular 8</h3>
            <h3 [class.text-success]="hasError">Hello World!!</h3>
            <h3 [ngClass]="messageClass">Hello World!!</h3>
            
            `,
  styles: [`
  
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:italic;
    }

  `]
})
export class AppComponent {

  public successClass = "text-success";
  public hasError = false;
  public isSpecial =true;

  public messageClass ={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }

  title = 'Angular 8 Application';
}
