import { Component } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {  
  public currentUser: User;
  existingUserStatus: any = localStorage.getItem('hrms_userInfo');
  existingUser: User[] = this.existingUserStatus === null? [] : JSON.parse(localStorage.getItem('hrms_userInfo'));
  constructor(){
  }

  ngOnInit(){
    this.currentUser = new User();       
  }
  
  public userSubmit(){    
  //  debugger;  
  // console.log(this.currentUser)
   this.existingUser.push(this.currentUser);   
    localStorage.setItem('hrms_userInfo', JSON.stringify(this.existingUser))     
  }
}
export class User {
  public userName: string;
  public password: string;
  public role: string;
  public createdDate: Date;
  public createdBy: string; 
}
