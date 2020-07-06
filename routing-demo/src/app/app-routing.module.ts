import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeparmentListComponent } from './deparment-list/deparment-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'


const routes: Routes = [
  {path:'departments', component:DeparmentListComponent},
  {path:'employees', component:EmployeeListComponent},
  {path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DeparmentListComponent, EmployeeListComponent, PageNotFoundComponent]

