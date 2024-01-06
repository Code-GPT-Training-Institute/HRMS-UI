import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { CreateUserComponent } from './manage-user/create-user/create-user.component';

const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: '', component: HomeComponent,
  children: [          
      {path: 'search', component: SearchComponent},
      {path: 'employee', component: EmployeeComponent},
      {path: 'manageuser', component: ManageUserComponent},
      {path: 'create-user', component: CreateUserComponent}    
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
