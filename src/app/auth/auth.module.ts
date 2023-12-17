import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { AuthNavBarComponent } from '../common/auth-nav-bar/auth-nav-bar.component';
import { LoginService } from '../services/login.service';
import { FooterModule } from '../common/footer/footer.module';

@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    AuthComponent,
    AuthNavBarComponent,
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FooterModule
  ],  
  providers: [LoginService]
})
export class AuthModule { }
