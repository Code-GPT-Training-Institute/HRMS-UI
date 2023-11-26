import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'employee', component: EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
