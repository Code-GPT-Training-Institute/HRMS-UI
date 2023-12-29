import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { SearchComponent } from './search/search.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginService } from '../services/login.service';
import { HomeComponent } from './home.component';
import { NavBarComponent } from '../common/nav-bar/nav-bar.component';

import { ManageUserComponent } from './manage-user/manage-user.component';
import { FooterModule } from '../common/footer/footer.module';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

import { CreateUserComponent } from './manage-user/create-user/create-user.component';
import { TableComponent } from '../common/table/table.component';



@NgModule({
  declarations: [    
    SearchComponent,
    EmployeeComponent,
    HomeComponent,
    NavBarComponent,
    ManageUserComponent,
    PersonalDetailsComponent,
    CreateUserComponent,    
    TableComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FooterModule,
    FormsModule
  ],
  providers: [LoginService],
  exports: [CreateUserComponent]
})
export class HomeModule { }
