import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public username: string = '';
  public password: string = '';

  public showUserName() {    
    if(this.username !== undefined && this.username !== "" && this.password !== undefined && this.password !== "" ){
      alert(`This is your username:  ${this.username}`)
    } else {
      alert("Please give the username and password")
    }    
  }
}
