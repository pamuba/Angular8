import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EmployeeService} from './employee.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EbComponent } from './eb/eb.component';
import { TrvComponent } from './trv/trv.component';
import { TwdbComponent } from './twdb/twdb.component';
import { FormsModule }  from '@angular/forms';
import { StdComponent } from './std/std.component';
import { SwitchDemoComponent } from './switch-demo/switch-demo.component';
import { ChildComponent } from './child/child.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    EbComponent,
    TrvComponent,
    TwdbComponent,
    StdComponent,
    SwitchDemoComponent,
    ChildComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
