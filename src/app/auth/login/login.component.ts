import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public username: string = '';
  public password: string = '';
  public enableLoginButton: boolean = false;

  constructor(private loginService: LoginService) {}

  public showUserName() {    
    if(this.username !== undefined && this.username !== "" && this.password !== undefined && this.password !== "" ){
      alert(`This is your username:  ${this.username}`)
    } else {
      alert("Please give the username and password")
    }    
  }

  public validateUserName() {
    this.loginService.validateUserName(this.username).subscribe(isValidUserName => {
      this.enableLoginButton = isValidUserName;
    })
  }
}
